import { formatNumber } from "@/utils/utils";
import Image from "next/image";
import React from "react";
import { MoonLoader } from "react-spinners";

function status({ findings }: any) {
  console.log(findings);
  return (

    <>
 { findings.map((finding: any, index: any) => {
    return(
      <div className="bg-white rounded-xl py-1 md:py-2 px-4 rounded-xl flex  justify-start items-center text-black w-full space-x-2 font-bold">
      <i className="p-1 rounded-full mb-1 animate-ping" style={
        {
          backgroundColor: finding.severity === "HIGH" ? "#FF5D5D" : finding.severity === "MED" ? "#FFC107" : "#6DD400"
        }
      
      }></i>
      <h1>{finding.severity}</h1>
      <p className="font-normal">
       {finding.mitigation}
      </p>
    </div>
      )
  }
  )}
  </>
  )
}

export default status;
