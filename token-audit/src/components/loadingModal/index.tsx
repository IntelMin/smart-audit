import React from "react";
import Image from "next/image";

function ShippingStep({ label, status }: any) {
  return (
    <div className='flex items-center md:flex-col flex-row z-[100] '>
      <div className='relative mr-4 '>
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center ${
            status === "completed"
              ? "whiteGlassmorphism"
              : "bg-[#FFFFFF0D] backdrop-blur-sm opacity-80"
          }`}
        >
          {status === "completed" && (
            <Image
              src='/tick.svg'
              alt='tick'
              width={40}
              height={40}
            />
          )}
        </div>
      </div>
      <h1 className='text-sm font-semibold'>{label}</h1>
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
    <div className='relative flex flex-col items-center gap-8 bg-[#FFFFFF0D] p-4 md:w-1/2 rounded-[16px] text-center overflow-hidden text-white mx-2'>
      <div className='flex flex-col md:flex-row md:items-center items-start gap-5 justify-center'>
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <ShippingStep
              label={step.label}
              status={step.status}
              // className='flex items-center md:flex-col flex-row'
            />

            {index !== steps.length - 1 && (
              <div className='h-1 bg-[#FFFFFF0D] backdrop-blur-sm hidden md:block w-18 absolute top-8 px-24 -z-10 md:rotate-0 rotate-90 opacity-60' />
            )}
            {index !== steps.length - 1 && (
              <div className='h-1 bg-[#FFFFFF0D] backdrop-blur-sm md:hidden block  w-12 relative top-18 right-[5px]  px-5 -z-10 md:rotate-0 rotate-90 opacity-60' />
            )}
          </React.Fragment>
        ))}
      </div>

      <div className='flex flex-col text-center'>
        {activeStep === 0 && (
          <div className='py-3'>
            <h1 className='text-medium'>Requested Audit</h1>
            <p className='font-normal text-sm'>
              Request Audit in progress. Thank you for your patience; we'll
              inform you once it's done.
            </p>
          </div>
        )}
        {activeStep === 1 && (
          <div className='text-center mt-4 space-y-3'>
            <h1 className='font-bold'>AI is Auditing</h1>
            <p className='font-normal text-sm'>
              AI auditing is ongoing, please bear with us through this stage.
            </p>
          </div>
        )}

        {activeStep === 2 && (
          <div className='flex flex-col space-y-3'>
            <h1>Complete</h1>
            <p className='font-normal text-sm'>
              Your audit is ready! Let’s see it.
            </p>
            <button
              className='py-2 w-full rounded-[24px] text-white'
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
