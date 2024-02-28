"use client"
import React from 'react'
import Editor, { Monaco } from "@monaco-editor/react";
import { useRef } from 'react';

function Index() {
    const editorRef = useRef(null);

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
        defaultValue="// some comment"
        onMount={handleEditorDidMount}
        theme='vs-dark'
        className=''
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
      }}
      >Submit</button>
    </div>

    </div>
  )
}

export default Index