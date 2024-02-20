"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function TokenAudit() {
  const router = useRouter();
  const [tokenAddress, setTokenAddress] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
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
