"use client";

import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function TokenAudit() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [tokenAddress, setTokenAddress] = useState("");
  const {toast} = useToast()  

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
  return (
    <main className="relative flex items-center justify-center bg-[url(/backgrounds/token.svg)] bg-cover bg-center min-h-screen">
      <div className="flex flex-col justify-between gap-8 bg-[#FFFFFF0D] p-6 rounded-[16px] w-[430px] h-[260px] text-center">
        <div className="flex flex-col gap-2">
          <h1 className="font-[700] text-lg text-white">Token Audit</h1>
          <p className="text-sm text-white">
            Submit token contract address to to get a detailed analysis of the
            token, before making your trade decision.
          </p>
        </div>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit }>
          <input
            type="text"
            placeholder="Enter contract Address"
            value={tokenAddress}
            onChange={(e) => setTokenAddress(e.target.value)}
            className="bg-[#FFFFFF14] px-4 py-[10px] rounded-[24px] w-full font-[500] text-[16px] text-white placeholder:text-[#D1D5DB] outline-none"
          />
          <button
            type="submit"
            className="py-[10px] rounded-[24px] w-full font-semibold text-[16px] text-white"
            style={{
              background:
                "linear-gradient(93.06deg, #00C5EC -1.37%, #423FF1 45.43%, #E131FD 94.83%)",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}