"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import SocialIcons from "../../../components/token-audit/socialIcons";
import StatsComponent from "../../../components/token-audit/statscomp";
import SecurityScore from "../../../components/token-audit/securityScore";
import MarketCap from "../../../components/token-audit/market-cap";
import AuditHistory from "../../../components/token-audit/audit-history";
import ContractCard from "@/components/token-audit/contract-card";
import { useParams } from "next/navigation";
import {
  NEW_AUDIT_RETURN_CODE,
  AUDIT_STATUS_RETURN_CODE,
} from "@/utils/audit-statuses";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { Progress } from "@/components/ui/progress";

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
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [findings, setFindings] = useState<any[]>([] as any[]);
  const [infoData, setInfoData] = useState<any | null>(null);
  const [metaData, setMetaData] = useState<any | null>(null);
  const [tokenData, setTokenData] = useState<any | null>(null);
  const [scanData, setScanData] = useState<any | null>(null);
  const [status, setStatus] = useState<statusType>({
    eta: 0,
    progress: 0,
    status: 0,
  });
  useEffect(() => {
    async function fetchStatus() {
      console.log("fetching status")
      const status = await fetch(`/api/audit/status`, {
        method: "POST",
        body: JSON.stringify({ address: id }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(status);
      const statusData = await status.json();
      console.log(statusData);
      setStatus(statusData);
      if (statusData.status === AUDIT_STATUS_RETURN_CODE.complete) {
        setLoading(false);
      }
    }
    const pollStatus = () => {
      if (loading) {
        fetchStatus();
        setTimeout(pollStatus, 1000); // Poll every 1 second
      }
    };

    pollStatus();
  }, [id]);
  useEffect(() => {
    async function checkToken() {
      if (id === "") return;
      const res = await fetch(`/api/token/check?token=${id}`);
      if (!res.ok) {
        return;
      }
      const data = await res.json();
      if (!data.address) {
        return;
      } else {
        return;
      }
    }

    // checkToken();
    async function fetchAudit() {
      checkToken();

      const request = await fetch(`/api/audit/findings?address=${id}`);
      console.log(request);
      const data = await request.json();
      console.log(data);
      setFindings(data);

      const res_fetch = await fetch(`/api/audit/fetch`, {
        method: "POST",
        body: JSON.stringify({ address: id }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const scan_res = await fetch(`/api/audit/info`, {
        method: "POST",
        body: JSON.stringify({ address: id, type: "scan" }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const scan_data = await scan_res.json();
      console.log(scan_data);
      setScanData(scan_data);
      const data_fetch = await res_fetch.json();
      data_fetch.token["marketcap"] = scan_data?.marketcap || {};
      data_fetch.token["holders"] =
        data_fetch.token["holders"] || data_fetch.security["holder_count"];
      console.log(data_fetch);
      setInfoData(data_fetch.info);
      setMetaData(data_fetch.meta);
      setTokenData(data_fetch.token);
    }
    fetchAudit();
  }, [id]);
  console.log(tokenData);

  const router = useRouter();
  const [tokenAddress, setTokenAddress] = useState("");
  const [isTokenValid, setIsTokenValid] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
    const request = await fetch(`/api/audit/request`, {
      method: "POST",
      body: JSON.stringify({ address: tokenAddress }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await request.json();
    console.log(data);
    if (tokenAddress === "") return;
    router.push(`/token-audit/${tokenAddress}`);
  };
  if (loading) {
    // return(
    //   <div className="absolute inset-0 backdrop-blur-xl text-white text-2xl font-semibold flex flex-col justify-center items-center space-y-2">
    //     <div>
    //     <span>Estimated time remaining.. {status.eta} </span> <button className="text-white px-4 py-2 outline-dotted">{status.status}</button>
    //     </div>

    //       <Progress value={status.progress} className="w-1/2"/>
          
    //   </div>
    // )
  }

  return (
    <div className="bg-[url(/backgrounds/token-result.svg)]  bg-cover bg-center md:pt-[148px] pt-[89px] min-h-screen">
      <div className="flex flex-col gap-8 p-6 min-h-[calc(100vh-148px)]">
        {/* Token Address Section */}
        <div className="relative hidden flex-col items-center gap-8 bg-[#FFFFFF0D] p-6 rounded-[16px] text-center overflow-hidden md:flex">
          {/* Token Logo */}
          <div className="bottom-0 left-0 z-[-1] absolute rounded-full -translate-x-[calc(50%-20px)] translate-y-[10px] size-[136px]">
            <Image
              alt="logo"
              src={tokenData?.icon_url ?? ""}
              width={136}
              height={136}
            />
          </div>
          {/* Token Logo */}
          <div className="top-0 right-0 z-[-1] absolute rounded-full -translate-y-[20px] translate-x-[calc(50%-23px)] size-[136px]">
            <Image
              alt="logo"
              src={tokenData?.icon_url ?? ""}
              width={136}
              height={136}
            />
          </div>
          <div className="flex flex-col gap-2 md:block" >
            <h1 className="font-[700] text-white text-xl">Token Audit</h1>
            <p className="font-[500] text-sm text-white">
              Submit token contract address to to get a detailed analysis <br />
              of the token, before making your trade decision.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="w-full flex justify-center items-center">
            <div className="flex items-center gap-4 ">
              <input
                className="bg-[#FFFFFF14] px-[16px] py-[10px] rounded-[80px] font-[500] text-[16px] text-white"
                onChange={(e) => setTokenAddress(e.target.value)}
                value={tokenAddress}
              />
              {/* <div className="bg-[#FFFFFF14] px-[16px] py-[10px] rounded-[80px]"> */}
              {/* </div> */}
              <button
                type="submit"
                style={{
                  background:
                    "linear-gradient(93.06deg, #00C5EC -1.37%, #423FF1 45.43%, #E131FD 94.83%)",
                }}
                className="px-[39px] py-[10px] rounded-[24px] font-[700] text-[16px] text-white"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        {/* Token Result Section */}
        <div className="grid md:grid-cols-4 gap-8">
          <ContractCard
            finding={findings}
            token={tokenData}
            scanData={scanData}
          />
          <div className="md:hidden block"> 

          <MarketCap scanData={scanData} />
          </div>
          <div className="rounded-[24px] md:space-y-10 space-y-6 md:w-full md:col-span-2">
            <StatsComponent scanData={scanData} tokenData={tokenData} />
            <SecurityScore scanData={scanData} />
          </div>

          <div className="rounded-[24px] md:space-y-10 ">
            <div className="md:block hidden">

            <MarketCap scanData={scanData} />
            </div>
            <AuditHistory findings={findings} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenResult;
