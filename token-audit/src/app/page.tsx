<<<<<<< HEAD
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/token-audit");
  return (
    <main className="min-h-screen p-64">
      <h1>Welcome! Redirecting to token-audit Page</h1>
=======
"use client";

import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import LoadingModal from "@/components/loadingModal";
import { useEffect, useState } from "react";
import { MoonLoader } from "react-spinners";

export default function TokenAudit() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [tokenAddress, setTokenAddress] = useState("");
  const { toast } = useToast();
  const [isTokenValid, setIsTokenValid] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
  
    if (tokenAddress === "") {
      toast({
        title: "Token address is required",
        variant: "destructive",
      });
      setLoading(false);
      return;
    }
  
    const res = await fetch(`/api/token/check?token=${tokenAddress}`);  
    if (!res.ok) {
      toast({
        title: "Token address is invalid",
        variant: "destructive",
      });
      setLoading(false);
      return;
    }
  
    setLoading(true);
  
    const request = await fetch(`/api/audit/request`, {
      method: "POST",
      body: JSON.stringify({ address: tokenAddress.toLowerCase() }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    setLoading(true);
    const data = await request.json();
  
  
    if (tokenAddress !== "") {
      router.push(`/${tokenAddress}`);
    }
  
    setLoading(false);
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
          {loading ?(
            <button
            type="submit"
            className="h-[10px]] py-[10px] rounded-[24px] flex justify-center items-center w-full font-semibold text-[16px] text-white"
            style={{
              background:
                "linear-gradient(93.06deg, #00C5EC -1.37%, #423FF1 45.43%, #E131FD 94.83%)",
            }}
            disabled={loading}
          >
            <MoonLoader color="white" size={20} />
          </button>
          ):(<button
            type="submit"
            className="py-[10px] rounded-[24px] w-full font-semibold text-[16px] text-white"
            style={{
              background:
                "linear-gradient(93.06deg, #00C5EC -1.37%, #423FF1 45.43%, #E131FD 94.83%)",
            }}
            disabled={loading}
          >
            Submit
          </button>)}
        </form>
      </div>

>>>>>>> 1f8a41f327c25547ff4786ee099e217e7546385d
    </main>
  );
}
