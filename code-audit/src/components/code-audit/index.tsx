import React, { useEffect, useState } from "react";
import Editor, { Monaco, loader } from "@monaco-editor/react";
import { useRef } from "react";
import {  useToast } from "../ui/use-toast";
import Status from "./status";
import axios from "axios";
import { useAccount } from "wagmi";
import { Loader } from "lucide-react";

const Index = () => {

  loader.init().then((monaco) => {
    monaco.editor.defineTheme("custom-theme", {
      base: "vs",
      inherit: true,
      rules: [],
      colors: {
        "editor.background": "#eeeeee00",
        "editor.foreground": "#ffffff",
        "editor.lineHighlightBackground": "#eeeeee00",
        "editor.textcolor": "#ffffff",
        "editorCursor.foreground":"#ffffff",
        "textSeparator.foreground":"#eeeeee00",
        "textCodeBlock.background":"#eeeeee00",
      },
    });
  });
  const {isConnected} = useAccount()
  const editorRef = useRef(null);
  const [contractCode, setContractCode] = useState("");
  const [codeHash, setCodeHash] = useState("");
  const [loading, setLoading] = useState(false);
  const [processing,setProcessing] = useState(false);
  const [findings, setFindings] = useState([]);
  const [noFindings, setNoFindings] = useState(false);

  const { toast } = useToast();

  const generateHash = async () => {
    try {
      const encoder = new TextEncoder();
      const data = encoder.encode(contractCode);
      const hashBuffer = await crypto.subtle.digest("SHA-256", data);

      return Array.from(new Uint8Array(hashBuffer))
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");
    } catch (error) {
      console.error("Hash generation failed: ", error);
      return "";
    }
  };
  useEffect(()=>{
    async function fetchAudit(){
      if(processing){
        const res =  await fetch(`/api/audit/code?hash=${codeHash}`)
        if(!res.ok){
          toast({
          title: "An error occurred during code audit",
          variant: "destructive",
        });
        setProcessing(false)
        
      }
      const audit = await res.json()
      if(audit?.message =="No audit found"){
        setProcessing(false)
      }
      if(audit?.message =="Audit pending"){
        return
      }
      if(!audit.result){
        return
      }
      if (audit.result === "No vulnerabilities found.") {
        setNoFindings(true);
        toast({
          title: "No vulnerabilities found",
          variant: "default",
        });
        setLoading(false)
        setProcessing(false)
      }
      // setFindings(audit.result);
      setProcessing(false)
      setLoading(false)

    }
    }

    if (!processing) return;

    const intervalId = setInterval(() => {
      fetchAudit();
    }, 5000); 
    return () => clearInterval(intervalId);
  },[loading,processing])

  const auditCode = async (sourceCode: string) => {
    if(!isConnected){
      toast({
        title:"Connect you wallet",
        variant:"default"
      })
      return
    }
    try {
      setLoading(true);
      const data = {
        type: "code",
        source: sourceCode,
        hash: codeHash,
      };
      setProcessing(true)
      const response = await axios.post("/api/audit/code", {
        data,
      });

      if (response.status !== 200) {
        toast({
          title: "An error occurred during code audit",
          variant: "destructive",
        });
        setLoading(false)
        return false;
      }
      
      
      const result = response.data;

      if(result.message == "Auditing added to queu." ){
        toast({
          title: "Audit requested",
          variant: "default",
        });

      }

    } catch (error) {
      console.error("Error during code audit: ", error);
      toast({
        title: "An error occurred during code audit",
        variant: "destructive",
      });
      setLoading(false)
    }
  };

  useEffect(() => {
    setLoading(true);

    generateHash().then((hash) => {
      setNoFindings(false)
      setCodeHash(hash);
      setLoading(false)
    });
  }, [contractCode]);

  const handleEditorDidMount = (editor: any, monaco: Monaco) => {
    editorRef.current = editor;
  };
console.log(noFindings)
  return (
    <div className="flex flex-col justify-center items-center space-y-6 bg-[#FFFFFF0D] backdrop-blur-xl mt-8 px-4 md:px-8 p-3 rounded-xl w-full md:w-[830px]">
      {findings?.length>0 ? (
        <>
          <Status findings={findings} />
        </>
      ) : (
        <>
          <h1 className="font-bold text-2xl">Code Audit</h1>
          <p className="text-center text-sm">
            Cutting-edge technology meticulously examines software code,
            ensuring security and reliability for developers and users alike.
          </p>
        </>
       )} 

      <div className="text-center">
        <h1 className="font-bold">Code Audit</h1>
        <p className="font-normal text-sm">
          Paste your token contract code here
        </p>
      </div>

      <div className="bg-[rgba(255, rounded-lg w-full 0.05)] 255, 255,">
        <Editor
          height="50vh"
          defaultLanguage="sol"
          defaultValue=""
          value={contractCode}
          onMount={handleEditorDidMount}
          theme="custom-theme"
          
          className=""
          onChange={(value: any) => {
            setContractCode(value);
          }}
          options={{
            autoIndent: "full",
            contextmenu: true,
            fontFamily: "monospace",
            fontSize: 13,
            lineHeight: 24,
            wordWrap: "on",
            cursorStyle: "block",
            hideCursorInOverviewRuler: true,
            matchBrackets: "always",
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
        <button
          type="submit"
          className="mt-2 py-1 rounded-full w-full text-center"
          style={{
            background:
              "linear-gradient(93.06deg, #00C5EC -1.37%, #423FF1 45.43%, #E131FD 94.83%)",
            opacity: loading ? 0.5 : 1,
          }}
          onClick={() => auditCode(contractCode)}
          disabled={loading}
        >
          {loading ? (<div className="flex w-full justify-center items-center space-x-3 text-center"><p>Auditing...</p><Loader className="opacity-60 ml-3 w-6 h-6 animate-spin ease-in-out" /></div>) : "Audit"}
        </button>
      </div>
    </div>
  );
};

export default Index;
