import React, { useEffect, useState } from 'react'
import Editor, { Monaco } from '@monaco-editor/react'
import { useRef } from 'react'
import { toast, useToast } from '../ui/use-toast'
import { MoonLoader } from 'react-spinners'
import Status from './status'

const index = () => {
  const editorRef = useRef(null)
  const [contractCode, setContractCode] = useState('')
  const [codeHash, setCodeHash] = useState('')
  const [loading, setLoading] = useState(false)
  const [findings, setFindings] = useState([])
  const [noFindings, setNoFindings] = useState(false)
  const { toast } = useToast()


  const generateHash = async () => {
    try {
      const encoder = new TextEncoder()
      const data = encoder.encode(contractCode)
      const hashBuffer = await crypto.subtle.digest('SHA-256', data)

      return Array.from(new Uint8Array(hashBuffer)).map((b) => b.toString(16).padStart(2, '0')).join('')
    } catch (error) {
      console.error('Hash generation failed: ', error)
      return ''
    }
  }

  const auditCode = async (sourceCode: string) => {
    try {
      setLoading(true)
      const data = {
        type: 'code',
        source: sourceCode,
      }

      const response = await fetch('/api/audit/code', {
        method: 'POST',
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        toast({
          title: 'An error occurred during code audit',
          variant: 'destructive',
        })
        return false
      }

      setLoading(false)

      const result = await response.json()
      console.log(result)
      if (result.message === 'No vulnerabilities found.') {
        setNoFindings(true)
        toast({
          title: 'No vulnerabilities found',
          variant: 'default',
        })
      }

      setFindings(result.findings)
    } catch (error) {
      console.error('Error during code audit: ', error)
      toast({
        title: 'An error occurred during code audit',
        variant: 'destructive',
      })
    }
  }

  useEffect(() => {
    setLoading(true)
    generateHash().then((hash) => {
      console.log(hash)
      setCodeHash(hash)
      setLoading(false)
    })
  }, [contractCode])

  const handleEditorDidMount = (editor: any, monaco: Monaco) => {
    // here is the editor instance
    // you can store it in `useRef` for further usage
    console.log('hhh', editor, monaco)
    editorRef.current = editor
  }

  return (
    <div className='flex flex-col backdrop-blur-xl p-3 justify-center items-center w-[830px] bg-[rgba(255, 255, 255, 0.05)] rounded-xl space-y-6 mt-8'>
      {!findings && (
        <>
          <h1 className='text-2xl font-bold'>Code Audit</h1>
          <p className='text-center text-sm'>
            Cutting-edge technology meticulously examines software code, ensuring
            security and reliability for developers and users alike.
          </p>
        </>
      )}

      <div className='text-center'>
        <h1 className='font-bold'>Code Audit</h1>
        <p className='font-normal text-sm'>Paste your token contract code here</p>
      </div>

      <div className='w-full rounded-lg bg-[rgba(255, 255, 255, 0.05)]'>
        <Editor
          height='50vh'
          defaultLanguage='sol'
          defaultValue=''
          value={contractCode}
          onMount={handleEditorDidMount}
          theme='vs-dark'
          className=''
          onChange={(value: any) => {
            setContractCode(value)
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
        <button
          type='submit'
          className='w-full rounded-full py-1 text-center mt-2'
          style={{
            background:
              'linear-gradient(93.06deg, #00C5EC -1.37%, #423FF1 45.43%, #E131FD 94.83%)',
            opacity: loading ? 0.5 : 1,
          }}
          onClick={() => auditCode(contractCode)}
          disabled={loading}
        >
          {loading ? (
            'Auditing...'
          ) : (
            'Audit'
          )}
        </button>
      </div>
    </div>
  )
}

export default Index