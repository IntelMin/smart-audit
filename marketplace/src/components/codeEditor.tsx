'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Editor from '@monaco-editor/react';


type Props = {
  setContractCode?: (code: string) => void;
  source: string | null;
  readonly?: boolean;
};

const CodeAuditEditor = (props: Props) => {
  const [toggle, setToggle] = useState('code');
  const [treeViewData, setTreeViewData] = useState<any>([]);
  const [sourceCode, setSourceCode] = useState<string>('');
  const [findings, setFindings] = useState<any>([]);
  // const isReadOnly = props.readonly !== undefined ? props.readonly : true;
  const isReadOnly = true;

  const editorRef = useRef<any>(null);
  console.log(findings);
  useEffect(() => {
    if (props?.source) {
      setSourceCode(props?.source);
    }
  }, [props]);

  const handleEditorDidMount = (editor: any, monaco: any) => {
    editorRef.current = editor;
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (props.setContractCode && !isReadOnly) {
      props.setContractCode(event.target.value);
    }
  };

  const goToLine = (lineNumber: number) => {
    const editor = editorRef.current;
    if (editor) {
      console.log('setting line: ' + lineNumber);
      editor.revealLineInCenter(lineNumber);
      editor.setPosition({ lineNumber: lineNumber, column: 1 });
      editor.focus();
    }
  };

  const handleLineSelectClick = (line: number) => {
    goToLine(line);
  };

  const [visibleMitigation, setVisibleMitigation] = useState(null);

  const toggleMitigation = (index: React.SetStateAction<null>) => {
    setVisibleMitigation(visibleMitigation === index ? null : index);
  };

  return (
    <>
      <div className="flex flex-grow mt-4">
        <div className="w-full">
          <Editor
            className='rounded-b-[24px] bg-opacity-99 pt-6'
            height="90vh"
            theme="vs-dark"
            language="sol"
            defaultLanguage="node"
            defaultValue=""
            value={sourceCode}
            onMount={handleEditorDidMount}
            options={{
              autoIndent: 'full',
              contextmenu: true,
              fontFamily: 'monospace',
              fontSize: 24,
              lineHeight: 24,
              wordWrap: 'on',
              cursorStyle: 'block',
              hideCursorInOverviewRuler: true,
              matchBrackets: 'always',
              minimap: {
                enabled: true,
              },
              scrollbar: {
                horizontalSliderSize: 4,
                verticalSliderSize: 0,
              },
              selectOnLineNumbers: true,
              roundedSelection: false,
              readOnly: isReadOnly,
              automaticLayout: true,
            }}
            onChange={
              !isReadOnly
                ? (newValue: any) =>
                  props.setContractCode
                    ? props.setContractCode(newValue)
                    : ''
                : undefined
            }
          />
        </div>

      </div>

    </>
  );
};

export default CodeAuditEditor;
