import { formatNumber } from '@/utils/utils'
import Image from 'next/image'
import React from 'react'
import { MoonLoader } from 'react-spinners'


function status({findings}) {

        return (
            <div className='bg-white rounded-xl py-4 px-4 rounded-xl flex  justify-start items-center text-black w-full space-x-2 font-bold'>
                <i className="bg-yellow-600 p-2 rounded-full mb-1">
                    </i>
       <h1>
        {findings.status|| "High"}
        </h1>
        <p className="font-normal">
        ERC223 tokens will be lost if they are accidentaly sent to a wrong address.
            </p>
    </div>

  )
}

export default status