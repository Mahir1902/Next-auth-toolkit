import {ExclamationTriangleIcon} from '@radix-ui/react-icons'
import React from 'react'

type Props = {
    message?:string
}

export default function FormError({message}: Props) {

    if(!message) return null

  return (
    <div className='bg-destructive/15 p-3 text-destructive flex items-center gap-x-2 text-sm rounded-md'>
        <ExclamationTriangleIcon className='h-4 w-4'/>
        <p>{message}</p>
    </div>
  )
}