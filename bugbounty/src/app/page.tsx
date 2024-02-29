import React, { Suspense } from "react";
import RewardCards from "@/components/bug-bounty/rewardCards";
export default function CodeAudit() {
  return (
    <main className="relative flex flex-col justify-start items-center space-y-10 bg-[url(/backgrounds/token.svg)] bg-cover bg-center pt-[156px] min-h-screen text-white ">
      <div className="flex flex-col justify-center space-y-5 w-full text-center">
        <h1 className="font-bold text-2xl">Bug Bounty</h1>
        <p className="text-center text-sm">
          Aggregate millions of bounties, including private ones, to incentivize
          the discovery and <br /> resolution of bugs
        </p>
      </div>
      <Suspense fallback={<h1>Loading...</h1>}>
        <RewardCards />
      </Suspense>
    </main>
  );
}
