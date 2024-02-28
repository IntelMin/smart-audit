"use client"
import React from 'react'
import CodeEditor from "../../components/code-audit"
export default function CodeAudit() {

    return (
      <main className="relative flex flex-col items-center mx-[100px] justify-center bg-[url(/backgrounds/token.svg)] bg-cover bg-center min-h-screen  text-white pt-[123px] space-x-4">
        <h1 className='text-2xl font-bold'>Code Audit</h1>
        <p className='text-center text-sm'>Cutting-edge technology meticulously examines software code, ensuring security and reliability for developers and users alike.</p>
        <CodeEditor/>
      </main>
    );
  }
  