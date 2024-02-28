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

  const [tokenAddress, setTokenAddress] = useState("");
  const { toast } = useToast();
  const [status, setStatus] = useState<statusType>({
    eta: 0,
    progress: 0,
    status: 0,
  });

  // useEffect(() => {
  //   const fetchStatus = async () => {
  //     if (!loading || id === "") return;

  //     try {
  //       const res = await fetch(`/api/token/check?token=${id}`);
  //       if (!res.ok) {
  //         throw new Error("Token address is invalid");
  //       }
  //       const tokenData = await res.json();
  //       if (!tokenData.address) {
  //         throw new Error("Token address is invalid");
  //       }
  //       setIsTokenValid(true);

  //       if (isTokenValid) {
  //         console.log("fetching status");
  //         const statusRes = await fetch(`/api/audit/status`, {
  //           method: "POST",
  //           body: JSON.stringify({ address: id }),
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //         });
  //         if (!statusRes.ok) {
  //           throw new Error("Failed to fetch status");
  //         }
  //         const statusData = await statusRes.json();
  //         console.log(statusData);
  //         setStatus(statusData);
  //         if (statusData.status === AUDIT_STATUS_RETURN_CODE.complete) {
  //           setLoading(false);
  //         }
  //       }
  //     } catch (error) {
  //       console.error("Error fetching status:", error.message);
  //       toast({
  //         title: error.message,
  //         variant: "destructive",
  //       });
  //       router.push("/");
  //     }
  //   };

  //   const pollStatus = () => {
  //     if (loading) {
  //       fetchStatus();
  //       if (!isTokenValid) return;
  //       console.log("polling status");
  //       setTimeout(pollStatus, 1000); // Poll every 1 second
  //     }
  //   };

  //   pollStatus();
  // }, [id, loading, isTokenValid, router, toast]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     if (!isTokenValid || status.status !== AUDIT_STATUS_RETURN_CODE.complete) return;

  //     try {
  //       const [auditDataRes, infoRes, liveDataRes, metaRes] = await Promise.all([
  //         fetch(`/api/audit/findings?address=${id}`),
  //         fetch(`/api/audit/info`, {
  //           method: "POST",
  //           body: JSON.stringify({ address: id, type: "info" }),
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //         }),
  //         fetch(`/api/token/live?address=${id}`),
  //         fetch(`/api/token/info?address=${id}&type=meta`),
  //       ]);

  //       const [auditData, infoData, liveData, metaData] = await Promise.all([
  //         auditDataRes.json(),
  //         infoRes.json(),
  //         liveDataRes.json(),
  //         metaRes.json(),
  //       ]);

  //       console.log("Audit Data:", auditData);
  //       console.log("Info Data:", infoData);
  //       console.log("Live Data:", liveData);
  //       console.log("Meta Data:", metaData);

  //       setFindings(auditData);
  //       setInfoData(infoData);
  //       setLiveData(liveData);
  //       setMetaData(metaData);

  //       if (auditData.token) {
  //         auditData.token["marketcap"] = liveData?.marketcap || {};
  //         auditData.token["holders"] = auditData.token["holders"] || auditData.security["holder_count"];
  //       }

  //       setTokenData(auditData.token);
  //     } catch (error) {
  //       console.error("Error fetching data:", error.message);
  //       toast({
  //         title: "Error fetching data",
  //         variant: "error",
  //       });
  //     }
  //   };

  //   fetchData();
  // }, [id, isTokenValid, status.status, toast]);

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
    // console.log(tokenAddress);
    setLoading(true);
    const request = await fetch(`/api/audit/request`, {
      method: "POST",
      body: JSON.stringify({ address: tokenAddress.toLowerCase() }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await request.json();

    if (tokenAddress === "") return;
    router.push(`/${tokenAddress}`);
    setLoading(false);
  };
  if (loading) {
    return (
      <div className='inset-0 absolute top-0 left-0 h-screen flex flex-col justify-center items-center backdrop-blur-lg  bg-[url(/backgrounds/token.svg)] bg-cover bg-center  '>
        <LoadingModal
          activeStep={status.status}
          setLoading={setLoading}
        />
      </div>
    );
  }

  return (
    <div className='bg-[url(/backgrounds/token-result.svg)]  bg-cover bg-center pt-[148px] min-h-screen'>
      <div className='flex flex-col gap-8 p-6 min-h-[calc(100vh-148px)]'>
        {/* Token Address Section */}
        <div className='relative flex flex-col items-center gap-8 bg-[#FFFFFF0D] p-6 rounded-[16px] text-center overflow-hidden'>
          {/* Token Logo */}
          <div className='bottom-0 left-0 z-[-1] absolute rounded-full -translate-x-[calc(50%-20px)] translate-y-[10px] size-[136px]'>
            <Image
              alt='logo'
              src={tokenData?.icon_url ?? "/icons/logo.svg"}
              width={136}
              height={136}
            />
          </div>
          {/* Token Logo */}
          <div className='top-0 right-0 z-[-1] absolute rounded-full -translate-y-[20px] translate-x-[calc(50%-23px)] size-[136px]'>
            <Image
              alt='logo'
              src={tokenData?.icon_url ?? "/icons/logo.svg"}
              width={136}
              height={136}
            />
          </div>
          <div className='flex flex-col gap-2'>
            <h1 className='font-[700] text-white text-xl'>Token Audit</h1>
            <p className='font-[500] text-sm text-white'>
              Submit token contract address to to get a detailed analysis <br />
              of the token, before making your trade decision.
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className='flex items-center gap-4 flex-col md:flex-row'>
              <input
                className='bg-[#FFFFFF14] px-[16px] py-[10px] rounded-[80px] font-[500] text-[16px] text-white'
                onChange={(e) => setTokenAddress(e.target.value)}
                // value={tokenAddress}
                value='0x514910771AF9Ca656af840dff83E8264EcF986CA'
              />
              {/* <div className="bg-[#FFFFFF14] px-[16px] py-[10px] rounded-[80px]"> */}
              {/* </div> */}
              <button
                type='submit'
                style={{
                  background:
                    "linear-gradient(93.06deg, #00C5EC -1.37%, #423FF1 45.43%, #E131FD 94.83%)",
                }}
                className='px-[39px] py-[10px] rounded-[24px] font-[700] text-[16px] text-white'
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        {/* Token Result Section */}
        <div className='grid lg:grid-cols-4  grid-cols-1 md:gap-8 gap-4'>
          <ContractCard
          // finding={findings}
          // token={tokenData}
          // scanData={scanData}
          // metaData={metaData}
          />

          <div className='rounded-[24px] space-y-10 w-full col-span-2'>
            <StatsComponent
              scanData={scanData}
              liveData={liveData}
              tokenData={tokenData}
            />
            <SecurityScore scanData={scanData} />
          </div>

          <div className='rounded-[24px] space-y-10 '>
            <MarketCap
            // liveData={liveData}
            // infoData={infoData}
            // scanData={scanData}
            />
            <AuditHistory findings={findings} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenResult;
