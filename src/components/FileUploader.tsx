'use client'
import {useDropzone} from 'react-dropzone'
import React, {useCallback} from 'react'
import { CircleArrowDown, RocketIcon } from 'lucide-react'

const FileUploader = () => {
    const onDrop = useCallback((acceptedFiles: File[]) => {
        // Do something with the files

      }, [])
      const {getRootProps, getInputProps, isDragActive, isFocused} = useDropzone({onDrop})
  return (
    <div className='flex flex-col justify-center items-center mx-auto mx-w-7xl px-6 lg:px-8 '>
        {/* loading  */}
    <div {...getRootProps()} className={`p-10 border-indigo-600 border-dashed border-2 mt-10 w-[90%] rounded-lg flex items-center justify-center h-96
        ${isDragActive || isFocused ? 'bg-indigo-300' :  'bg-indigo-100'}`}>
      <input {...getInputProps()} />
      <div className='text-center flex flex-col justify-center items-center text-indigo-700'>
      {
        isDragActive ?(
        <>
        <RocketIcon className='w-12 h-12 animate-ping' />
          <p>Drop the files here ...</p> :
         
          </>) :
          (
            <>
            <CircleArrowDown className='w-20 h-20 animate-bounce' />
            <p>Drag and drop some files here, or click to select files</p>
            </>
          )
      }
      </div>
    </div>
    </div>
  )
}

export default FileUploader
