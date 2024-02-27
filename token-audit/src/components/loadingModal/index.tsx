import React, { useState } from 'react';
import Image from 'next/image';

function UserDetails() {
  return (
    <div className='flex flex-col text-center'>
      <h1>Requested audit</h1>
      <p className='font-normal text-sm'>
        Request Audit in progress. Thank you for your patience; we'll inform you once it's done.
      </p>
    </div>
  );
}

function Payment() {
  return (
    <div className='flex flex-col text-center mt-4 px-7 space-y-3'>
      <h1 className='font-bold '>AI is Auditing</h1>
      <p className='font-normal text-sm'>
        AI auditing is ongoing, please bear with us through this stage.
      </p>
    </div>
  );
}

function Confirmation({ setLoading }) {
  return (
    <div className='flex flex-col text-center space-y-3 w-full'>
      <h1>Complete</h1>
      <p className='font-normal text-sm'>
        Your audit is ready! Let’s see it.
      </p>
      <button
        className="py-2 flex justify-center w-full items-center rounded-[24px] text-white md:flex"
        onClick={() => setLoading(false)}
        style={{
          background: "linear-gradient(93.06deg, #00C5EC -1.37%, #423FF1 45.43%, #E131FD 94.83%)",
        }}
      >
        Close
      </button>
    </div>
  );
}

export default function LoadingModal({ setLoading }) {
  const [activeStep, setActiveStep] = useState(1);//status will be used 

  return (
    <div className="flex inset-0 p-4 inner-shadow-xl flex-col justify-center items-center text-white rounded-xl bg-[#110b0b5b] ">
      <div className="flex space-x-4 relative">
        <Image src="/line.svg" alt="" width={100} height={10} className='absolute mt-2 left-9' />
        <Image src="/line.svg" alt="" width={100} height={10} className='absolute mt-2 right-16' />
        
        <div className="flex flex-col space-y-2">
          <Image src={activeStep >= 0 ? "/tick.svg" : "/ellipse.svg"} width="20" height="20" alt="icon" />
          <h1 className="text-sm font-semibold">Requested Audit</h1>
        </div>

        <div className="flex flex-col space-y-2">
          <Image src={activeStep >= 1 ? "/tick.svg" : "/ellipse.svg"} width="20" height="20" alt="icon" />
          <h1 className="text-sm font-semibold">AI is Auditing</h1>
        </div>

        <div className="flex flex-col space-y-2">
          <Image src={activeStep >= 2 ? "/tick.svg" : "/ellipse.svg"} width="20" height="20" alt="icon" />
          <h1 className="text-sm font-semibold">Complete</h1>
        </div>
      </div>

      <div className="flex flex-col text-center px-7">
        {activeStep === 0 && <UserDetails />}
        {activeStep === 1 && <Payment />}
        {activeStep === 2 && <Confirmation setLoading={setLoading} />}
      </div>
    </div>
  );
}
