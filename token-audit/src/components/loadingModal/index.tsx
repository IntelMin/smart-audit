import React from "react";
import Image from "next/image";

function ShippingStep({ label, status }: any) {
  return (
    <div className='grid items-center md:gap-2 md:grid-cols-3 grid-cols-1 justify-start '>
      <div className='flex md:flex-col flex-row  justify-center gap-1 items-center w-full'>
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center ${
            status === "completed"
              ? "bg-transparent rounded-full"
              : "whiteGlassmorphism"
          }`}
        >
          {status === "completed" && (
            <Image
              src='/tick.svg'
              alt='tick'
              width={20}
              height={20}
            />
          )}
        </div>
        {/* <div className='h-.5 whiteGlassmorphism w-20'></div> */}
        <h1 className='text-sm font-semibold w-full text-nowrap'>{label}</h1>
      </div>
    </div>
  );
}

export default function LoadingModal({ setLoading, activeStep }: any) {
  const steps = [
    { label: "Requested Audit", status: "completed" },
    {
      label: "AI is Auditing",
      status: activeStep >= 1 ? "completed" : "pending",
    },
    {
      label: "Complete",
      status: activeStep >= 2 ? "completed" : "pending",
    },
  ];

  return (
    <div className='relative flex flex-col items-center gap-8 bg-[#FFFFFF0D] p-6 rounded-[16px] text-center overflow-hidden text-white justify-start lg:mx-0 md:mx-28 mx-4'>
      <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 relative justify-even items-center'>
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <ShippingStep
              label={step.label}
              status={step.status}
            />
            {index !== steps.length - 1 && (
              <div className='h-0.5 bg-transparent w-16 md:w-20 md:h-20 md:ml-2 md:mt-4 md:absolute md:top-1/4 md:left-1/2 md:-translate-x-1/2 md:rounded-full' />
            )}
          </React.Fragment>
        ))}
      </div>

      <div className='flex flex-col text-center px-7'>
        {activeStep === 0 && (
          <div className='py-3'>
            <h1 className='text-medium'>Requested Audit</h1>
            <p className='font-normal text-sm'>
              Request Audit in progress. Thank you for your patience; we&apos;ll
              inform you once it&apos;s done.
            </p>
          </div>
        )}
        {activeStep === 1 && (
          <div className='text-center mt-4 px-7 space-y-3'>
            <h1 className='font-bold'>AI is Auditing</h1>
            <p className='font-normal text-sm'>
              AI auditing is ongoing, please bear with us through this stage.
            </p>
          </div>
        )}

        {activeStep === 2 && (
          <div className='flex flex-col text-center space-y-3 w-full'>
            <h1>Complete</h1>
            <p className='font-normal text-sm'>
              Your audit is ready! Let’s see it
            </p>
            <button
              className='py-2 flex justify-center w-full items-center rounded-[24px] text-white md:flex'
              onClick={() => setLoading(false)}
              style={{
                background:
                  "linear-gradient(93.06deg, #00C5EC -1.37%, #423FF1 45.43%, #E131FD 94.83%)",
              }}
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
