"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import SocialIcons from "@/components/token-audit/socialIcons";
import StatsComponent from "@/components/token-audit/statscomp";
import SecurityScore from "@/components/token-audit/securityScore";
import MarketCap from "@/components/token-audit/market-cap";
import AuditHistory from "@/components/token-audit/audit-history";
import ContractCard from "@/components/token-audit/contract-card";
import { useParams } from "next/navigation";
import {
  NEW_AUDIT_RETURN_CODE,
  AUDIT_STATUS_RETURN_CODE,
} from "@/utils/audit-statuses";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { Progress } from "@/components/ui/progress";
import LoadingModal from "@/components/loadingModal";
import axios from "axios";
import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";


type Props = {
  params: {
    id: string;
  };
};
type statusType = {
  eta: number;
  progress: number;
  status: number;
};
const TokenResult = ({ params }: Props) => {
  const router = useRouter();
  const { isConnected } = useAccount();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [findings, setFindings] = useState<any[]>([] as any[]);
  const [infoData, setInfoData] = useState<any | null>(null);
  const [metaData, setMetaData] = useState<any | null>(null);
  const [tokenData, setTokenData] = useState<any | null>(null);
  const [scanData, setScanData] = useState<any | null>(null);
  const [liveData, setLiveData] = useState<any | null>(null);
  const [isTokenValid, setIsTokenValid] = useState(false);
  const [isinputTokenValid, setIsinputTokenValid] = useState(false);
  const [timeoutid, setTimeoutid] = useState<any>(null);
  const [tokenAddress, setTokenAddress] = useState("");
  const { toast } = useToast();
  const [status, setStatus] = useState<statusType>({
    eta: 0,
    progress: 0,
    status: 0,
  });
  useEffect(() => {
    const fetchStatus = async () => {
      if (!loading || id === "") return;

      try {
        const res = await fetch(`/api/token/check?token=${id}`);
        if (!res.ok) {
          throw new Error("Token address is invalid");
        }
        const tokenData = await res.json();
        if (!tokenData.address) {
          throw new Error("Token address is invalid");
        }
        setIsTokenValid(true);

        if (isTokenValid) {
          const statusRes = await fetch(`/api/audit/status`, {
            method: "POST",
            body: JSON.stringify({ address: (id as string).toLowerCase() }),
            headers: {
              "Content-Type": "application/json",
            },
          });
          if (!statusRes.ok) {
            throw new Error("Failed to fetch status");
          }
          const statusData = await statusRes.json();
          console.log(statusData);
          setStatus(statusData);
          // if (statusData.status === AUDIT_STATUS_RETURN_CODE.complete) {
          //   setLoading(false);
          // }
        }
      } catch (error: any) {
        console.error("Error fetching status:", error);
        toast({
          title: error.message,
          variant: "destructive",
        });
        router.push("/");
      }
    };

    const pollStatus = () => {
      if(!loading) {
        clearTimeout(timeoutid);
      };
      if (loading) {
        fetchStatus();
        if (!isTokenValid) return;
        const tid = setTimeout(pollStatus, 1000); 
        setTimeoutid(tid);
      }
    };

    pollStatus();
  }, [id, loading, isTokenValid, router, toast]);

  useEffect(() => {
    async function fetchMeta() {
      if (!isTokenValid) return;
      if (status.status !== AUDIT_STATUS_RETURN_CODE.complete) return;
      const res = await fetch(
        `/api/token/info?address=${(id as string).toLowerCase()}&type=meta`
      );
      const data = await res.json();
      setMetaData(data);
    }
    async function fetchAudit() {
      if (!isTokenValid) return;
      if (status.status !== AUDIT_STATUS_RETURN_CODE.complete) return;
      const request = await fetch(
        `/api/audit/findings?address=${(id as string).toLowerCase()}`
      );
      const data = await request.json();
      setFindings(data);

      if (status.status !== AUDIT_STATUS_RETURN_CODE.complete) return;
      const res_fetch = await fetch(`/api/audit/fetch`, {
        method: "POST",
        body: JSON.stringify({ address: (id as string).toLowerCase() }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const scan_res = await fetch(`/api/audit/info`, {
        method: "POST",
        body: JSON.stringify({
          address: (id as string).toLowerCase(),
          type: "scan",
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const scan_data = await scan_res.json();
      setScanData(scan_data);
      const data_fetch = await res_fetch.json();
      if (data_fetch.token) {
        data_fetch.token["marketcap"] = scan_data?.marketcap || {};
        data_fetch.token["holders"] =
          data_fetch.token["holders"] || data_fetch.security["holder_count"];
      }
      setTokenData(data_fetch.token);
    }
    async function fetchliveData() {
      if (status.status !== AUDIT_STATUS_RETURN_CODE.complete) return;
      const res = await fetch(
        `/api/token/live?address=${(id as string).toLowerCase()}`
      );
      const data = await res.json();
      setLiveData(data);
    }
    async function fetchInfo() {
      if (status.status !== AUDIT_STATUS_RETURN_CODE.complete) return;
      const res = await fetch(`/api/audit/info`, {
        method: "POST",
        body: JSON.stringify({
          address: String(id).toLowerCase(),
          type: "info",
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setInfoData(data);
    }
    async function fetchData() {
      try {
        await Promise.all([
          fetchAudit(),
          fetchInfo(),
          fetchliveData(),
          fetchMeta(),
        ]);
      } catch (e) {
        console.error(e);
        toast({
          title: "Failed to fetch data",
          variant: "destructive",
        });
        // setLoading(false);
      }
    }

    fetchData();
  }, [id, isTokenValid,loading, status.status]);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsinputTokenValid(false);
    async function checkToken() {
      if (tokenAddress === "") return;
      const res = await fetch(`/api/token/check?token=${tokenAddress}`);
      if (!res.ok) {
        toast({
          title: "Token address is invalid",
          variant: "destructive",
        });
        return;
      }
      const token_data = await res.json();
      if (!token_data.address) {
        toast({
          title: "Token address is invalid",
          variant: "destructive",
        });
        return;
      }
      setIsinputTokenValid(true);
    }
    checkToken();
    if (!setIsinputTokenValid) return;

    if (tokenAddress === "") return;
    const request = await fetch(`/api/audit/request`, {
      method: "POST",
      body: JSON.stringify({ address: tokenAddress.toLowerCase() }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    router.push(`/${tokenAddress}`);

    const data = await request.json();

    setLoading(false);
  };
  if (!isConnected) {
    router.push("/");
  }
  


  return (
    <div className='bg-[url(/backgrounds/token-result.svg)] bg-cover bg-center pt-[148px] min-h-screen'>
    {loading && (
      <div className='absolute inset-0 z-[1000] flex flex-col items-center justify-center backdrop-blur-lg bg-[#00000080]'>
        <LoadingModal activeStep={status.status} setLoading={setLoading} />
      </div>
    )}
    <div className='flex flex-col gap-8 p-6 min-h-[calc(100vh-148px)]'>
      {/* Token Address Section */}
      <div className='relative flex flex-col items-center gap-8 bg-[#FFFFFF0D] p-6 rounded-[16px] text-center overflow-hidden'>
        {/* Token Logo */}
        <div className='absolute bottom-0 left-0 z-[-1] rounded-full -translate-x-1/2 translate-y-[-10px] size-[136px]'>
          <Image alt='logo' src={"/icons/logo.svg"} width={136} height={136} />
        </div>
        {/* Token Logo */}
        <div className='absolute top-0 right-0 z-[-1] rounded-full -translate-y-[-20px] translate-x-1/2 size-[136px]'>
          <Image alt='logo' src={"/icons/logo.svg"} width={136} height={136} />
        </div>
        <div className='flex flex-col gap-2'>
          <h1 className='font-semibold text-lg text-white'>Token Audit</h1>
          <p className='text-sm text-white'>
            Submit token contract address to get a detailed analysis <br />
            of the token, before making your trade decision.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='flex items-center gap-4 flex-col md:flex-row'>
            <input
              className='px-4 py-2 rounded-full font-medium text-sm text-white bg-[#FFFFFF14]'
              onChange={(e) => setTokenAddress(e.target.value)}
              value={tokenAddress || liveData?.baseToken.address}
            />
            <button
              type='submit'
              className='px-6 py-2 rounded-full font-semibold text-sm text-white bg-gradient-to-r from-[#00C5EC] via-[#423FF1] to-[#E131FD]'
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      {/* Token Result Section */}
      <div className='grid lg:grid-cols-4 gap-4'>
        <ContractCard finding={findings} token={tokenData} scanData={scanData} metaData={metaData} />
        <div className='rounded-lg space-y-10 col-span-2'>
          <StatsComponent scanData={scanData} liveData={liveData} tokenData={tokenData} />
          <SecurityScore scanData={scanData} />
        </div>
        <div className='rounded-lg space-y-10'>
          <MarketCap liveData={liveData} infoData={infoData} scanData={scanData} />
          <AuditHistory findings={findings} />
        </div>
      </div>
    </div>
  </div>
  );
};

export default TokenResult;
