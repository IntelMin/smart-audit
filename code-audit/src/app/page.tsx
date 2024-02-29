"use client"
import React from 'react'
import CodeEditor from "../components/code-audit"
export default function CodeAudit() {
    
    return (
      <main className="relative flex flex-col items-center md:mx-[100px] justify-center bg-[url(/backgrounds/token.svg)] bg-cover bg-center min-h-screen  text-white pt-[123px] space-x-4">
        <CodeEditor/>
      </main>
    );
  }
  