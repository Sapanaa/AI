'use client' 
//if we have interractive component then include this always

import React from 'react'
import { Button } from './ui/button'
import { PlusCircleIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'

const PlaceHolderDocument = () => {


    const router = useRouter()
    const handleClick = async () => {
        //heck if user us Freee 
        router.push('/dashboard/upload')
    }
  return <Button onClick={handleClick} className='flex items-center flex-col w-64 h-80 rounded-xl bg-gray-200 drop-shadow-md text-gray-400'>
    <PlusCircleIcon className='w-16 h-16' />
    <p>Add a Document</p>
  </Button>
}

export default PlaceHolderDocument
