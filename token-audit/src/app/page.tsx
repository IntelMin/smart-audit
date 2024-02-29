"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import LoadingModal from "@/components/loadingModal";
import { useAccount } from "wagmi";

export default function TokenAudit() {
  const [loading, setLoading] = useState(false);
  const [tokenAddress, setTokenAddress] = useState("");
  const { toast } = useToast();
  const { isConnected } = useAccount();
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!isConnected) {
      toast({
        title: "Connect your wallet to continue",
        variant: "destructive",
      });
      return;
    }
    if (tokenAddress.trim() === "") {
      toast({
        title: "Token address is required",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`/api/token/check?token=${tokenAddress}`);
      if (!res.ok) {
        toast({
          title: "Token address is invalid",
          variant: "destructive",
        });
        return;
      }

      const request = await fetch(`/api/audit/request`, {
        method: "POST",
        body: JSON.stringify({ address: tokenAddress.toLowerCase() }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await request.json();

      console.log(data);

      if (tokenAddress !== "") {
        router.push(`/${tokenAddress}`);
      }
    } catch (error) {
      console.error("An error occurred:", error);
      toast({
        title: "An error occurred. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className='relative flex items-center justify-center bg-[url(/backgrounds/token.svg)] bg-cover bg-center min-h-screen'>
      {loading && (
        <>
          <div className='flex h-screen  justify-center items-center absolute z-10 backdrop-blur-3xl min-w-full  '>
            <LoadingModal
            // setLoading={setLoading}
            // activeStep={0}
            />
          </div>
        </>
      )}{" "}
      {/* Show loading modal if loading state is true */}
      <div className='flex flex-col justify-between gap-8 bg-[#FFFFFF0D] p-6 rounded-[16px] w-[430px] h-[260px] text-center'>
        <div className='flex flex-col gap-2'>
          <h1 className='font-[700] text-lg text-white'>Token Audit</h1>
          <p className='text-sm text-white'>
            Submit token contract address to to get a detailed analysis of the
            token, before making your trade decision.
          </p>
        </div>

        <form
          className='flex flex-col gap-4'
          onSubmit={handleSubmit}
        >
          <input
            type='text'
            placeholder='Enter contract Address'
            value={tokenAddress}
            onChange={(e) => setTokenAddress(e.target.value)}
            className='bg-[#FFFFFF14] px-4 py-[10px] rounded-[24px] w-full font-[500] text-[16px] text-white placeholder:text-[#D1D5DB] outline-none'
          />

          <button
            type='submit'
            className='py-2 flex justify-center w-full items-center rounded-[24px] text-white md:flex'
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
