import React from "react";
import Image from "next/image";

function UserDetails() {
  return (
    <div className='flex flex-col py-3 px-5 text-center'>
      <h1 className='text-medium'>Requested audit</h1>
      <p className='font-normal text-sm'>
        Request Audit in progress. Thank you for your patience; we&apos;ll inform you
        once it&apos;s done.
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

function Confirmation({ setLoading }: any) {
  return (
    <div className='flex flex-col text-center space-y-3 w-full'>
      <h1>Complete</h1>
      <p className='font-normal text-sm'>Your audit is ready! Let’s see it.</p>
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
  );
}

export default function LoadingModal({ setLoading, activeStep }: any) {
  return (
    <div className='relative flex flex-col items-center gap-8 bg-[#FFFFFF0D] p-6 rounded-[16px] text-center overflow-hidden text-white justify-start lg:mx-0 md:mx-28 mx-4'>
      <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 relative items-center'>
        {/* <div className=' absolute h-[2px] bg-white w-full left-0 right-0 top-1/2 transform md:-translate-y-1/2 translate-y-1/2'></div>
        
        */}
        <Image
          src='/line.svg'
          alt=''
          width={100}
          height={10}
          className='absolute md:flex hidden left-16 top-1/4 right-0  transform -z-10 md:-translate-y-1/2 translate-y-1/2'
        />
        <Image
          src='/line.svg'
          alt=''
          width={50}
          height={30}
          className='absolute md:flex hidden left-[11.5rem] top-1/4 right-0  transform -z-10 md:-translate-y-1/2 translate-y-1/2'
        />
        <Image
          src='/line.svg'
          alt=''
          width={80}
          height={30}
          className='absolute flex md:hidden  right-[13.8rem] top-1/4  rotate-90 transform -z-10 md:-translate-y-1/2 translate-y-1/2'
        />
          <Image
          src='/line.svg'
          alt=''
          width={75}
          height={30}
          className='absolute flex md:hidden  right-[14rem] top-[65%]  rotate-90 transform -z-10 md:-translate-y-1/2 translate-y-1/2'
        />
        <div className='flex md:flex-col flex-row items-center -mb-5 -ml-36 lg:ml-0 sticky gap-2 '>
          <Image
            src={activeStep >= 0 ? "/tick.svg" : "/ellipse.svg"}
            width='40'
            height='40'
            alt='icon'
          />
          <h1 className='text-sm font-semibold'>Requested Audit</h1>
        </div>
        <div className='bg-transparent w-0.5  mr-[16rem] flex mt-20  top-0  h-10  md:hidden  z-5 static '></div>
        <div className='flex md:flex-col flex-row items-center -ml-44 lg:ml-0 sticky gap-2'>
          <Image
            src={activeStep >= 1 ? "/tick.svg" : "/ellipse.svg"}
            width='40'
            height='40'
            alt='icon'
          />
          <h1 className='text-sm font-semibold'>AI is Auditing</h1>
        </div>
        <div className='bg-transparent w-0.5  mr-[16rem] -my-5 -py-5 -top-1/2 h-10  md:hidden flex'></div>
        <div className='flex md:flex-col flex-row items-center -ml-48 md:ml-0 sticky gap-2'>
          <Image
            src={activeStep >= 2 ? "/tick.svg" : "/ellipse.svg"}
            width='40'
            height='40'
            alt='icon'
          />
          <h1 className='text-sm font-semibold'>Complete</h1>
        </div>
      </div>


      <div className="flex flex-col text-center px-7">
        {activeStep === 0 || activeStep === 4 && <UserDetails />}
        {activeStep === 1 && <Payment />}
        {activeStep === 2 && <Confirmation setLoading={setLoading} />}

        {/* <div className=' blur-md backdrop-blur-lg  w-full  h-5 bg-gradient-to-tr from-[#07b7ec] via-[#3f44f0]  to-[#8e35ea] '></div> */}
      </div>
    </div>
  );
}
