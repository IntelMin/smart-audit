import React, { useEffect, useState } from "react";
import Editor, { Monaco, loader } from "@monaco-editor/react";
import { useRef } from "react";
import {  useToast } from "../ui/use-toast";
import Status from "./status";
import axios from "axios";
import { Loader } from "lucide-react";
import { useAccount } from "wagmi";

const Index = () => {
  const { isConnected, address } = useAccount();
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
  const editorRef = useRef(null);
  const [contractCode, setContractCode] = useState("");
  const [codeHash, setCodeHash] = useState("");
  const [loading, setLoading] = useState(false);
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

  const auditCode = async (sourceCode: string) => {
    if(isConnected){
      try {
        setLoading(true);
        const data = {
          type: "code",
          source: sourceCode,
        };
  
        const response = await axios.post("/api/audit/code", {
          data,
        },{
          timeout: 1000 * 60 * 5
        });
  
        if (response.status !== 200) {
          toast({
            title: "An error occurred during code audit",
            variant: "destructive",
          });
          return false;
        }
  
        setLoading(false);
  
        const result = response.data;
        console.log(result);
        if (result.message === "No vulnerabilities found.") {
          setNoFindings(true);
          toast({
            title: "No vulnerabilities found",
            variant: "default",
          });
        }
  
        setFindings(result.findings);
        console.log(result.findings);
      } catch (error) {
        console.error("Error during code audit: ", error);
        toast({
          title: "An error occurred during code audit",
          variant: "destructive",
        });
      }
    }
    else{
      toast({
        title: "Please connect your wallet",
        variant: "destructive",
      });
    }
    
  };

  useEffect(() => {
    setLoading(true);
    generateHash().then((hash) => {
      console.log(hash);
      setCodeHash(hash);
      setLoading(false);
    });
  }, [contractCode]);

  const handleEditorDidMount = (editor: any, monaco: Monaco) => {
    // here is the editor instance
    // you can store it in `useRef` for further usage
    console.log("hhh", editor, monaco);
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
