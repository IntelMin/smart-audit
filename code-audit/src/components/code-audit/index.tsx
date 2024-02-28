"use client"
import React,{ useEffect, useState } from 'react'
import Editor, { Monaco } from "@monaco-editor/react";
import { useRef } from 'react';
import { toast, useToast } from '../ui/use-toast';
import { MoonLoader } from 'react-spinners';

function index() {
    const editorRef = useRef(null);
    
    const [ContractCode, setContractCode] = useState('');
    const [CodeHash, setCodeHash] = useState('');
    const [Loading, setLoading] = useState(false);
    const [Findings, setFindings] = useState([]);
    const [NoFindings, setNoFindings] = useState(false);
    const{toast}= useToast();
    const generateHash = async () => {
      try {
        const encoder = new TextEncoder();
        const data = encoder.encode(ContractCode);
        const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  
        return Array.from(new Uint8Array(hashBuffer))
          .map(b => b.toString(16).padStart(2, '0'))
          .join('');
      } catch (error) {
        console.error('Hash generation failed:', error);
        return '';
      }
    };
    const AuditCode = async (source_code: string) => {
      try {
        setLoading(true);
        const data = {
          type: 'code',
          source: source_code,
        };
  
        const response = await fetch('/api/audit/code', {
          method: 'POST',
          body: JSON.stringify(data),
        });
  
        if (!response.ok) {
          toast({
            title: 'An error occurred during code audit',
            variant:"destructive"
          });
          return false;
        }
  
        setLoading(false);
  
        const result = await response.json();
        console.log(result);
        if (result.message === 'No vulnerabilities found.') {
          setNoFindings(true);
          toast({
            title: 'No vulnerabilities found',
            variant:"default"
          });
        }
  
        setFindings(result.findings);
      } catch (error) {
        console.error('Error during code audit:', error);
        toast({
          title: 'An error occurred during code audit',
          variant:"destructive"
        });
      }
    };
    
  
    useEffect(() => {
      setLoading(true);
      generateHash().then(hash => {
        console.log(hash);
        setCodeHash(hash);
        setLoading(false);
      });
    }, [ContractCode]);
    function handleEditorDidMount(editor: any, monaco: Monaco) {
      // here is the editor instance
      // you can store it in `useRef` for further usage
      console.log("hhh", editor, monaco);
      editorRef.current = editor;
    }
  return (
    <div className='flex flex-col backdrop-blur-xl p-3 justify-center items-center w-[830px] bg-[rgba(255, 255, 255, 0.05)] rounded-xl space-y-6 mt-8'>
        <div className='text-center'>
        <h1 className='font-bold' >
            Code Audit
        </h1>
        <p className='font-normal text-sm'>
        Paste your token contract code here
        </p>
        </div>
       
        <div className='w-full rounded-lg bg-[rgba(255, 255, 255, 0.05)]'>
      <Editor
        height="50vh"
        defaultLanguage="sol"
        defaultValue=""
        value={ContractCode}
        onMount={handleEditorDidMount}
        theme='vs-dark'
        className=''
        onChange={(value:any) => {
          setContractCode(value);
        }}
        options={{
            autoIndent: 'full',
            contextmenu: true,
            fontFamily: 'monospace',
            fontSize: 13,
            lineHeight: 24,
            wordWrap: 'on',
            cursorStyle: 'block',
            hideCursorInOverviewRuler: true,
            matchBrackets: 'always',
            minimap: {
              enabled: false,
            },
            scrollbar: {
              horizontalSliderSize: 4,
              verticalSliderSize: 18,
            },
            selectOnLineNumbers: true,
            roundedSelection: false,
            automaticLayout: true,
          }}

      />
      <button type="submit" className='w-full rounded-full py-1 text-center mt-2'
      style={{
        background:
          "linear-gradient(93.06deg, #00C5EC -1.37%, #423FF1 45.43%, #E131FD 94.83%)",
        opacity: Loading ? 0.5 : 1,
      }}
      onClick={() => AuditCode(ContractCode)}
      disabled={Loading}
      >
        {Loading ? (
   
          'Auditing...'
        ) : 'Audit'}
      </button>
    </div>

    </div>
  )
}

export default index