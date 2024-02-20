export default function TokenAudit() {
  return (
    <main className="min-h-screen bg-[url(/backgrounds/token.svg)] bg-center bg-cover relative flex items-center justify-center">
      <div className="w-[430px] h-[260px] gap-8 text-center rounded-[16px] bg-[#FFFFFF0D] p-6 flex flex-col justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-white font-[700] text-lg">Token Audit</h1>
          <p className="text-white text-sm">
            Submit token contract address to to get a detailed analysis of the
            token, before making your trade decision.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter contract Address"
            className="w-full bg-[#FFFFFF14] py-[10px] px-4 rounded-[24px] text-white text-[16px] font-[500] placeholder:text-[#D1D5DB]"
          />
          <button
            type="button"
            className="rounded-[24px] text-white text-[16px] py-[10px] font-semibold w-full"
            style={{
              background:
                "linear-gradient(93.06deg, #00C5EC -1.37%, #423FF1 45.43%, #E131FD 94.83%)",
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </main>
  );
}
