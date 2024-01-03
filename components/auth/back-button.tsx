'use client'

import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

type Props = {
    label:string,
    href: string
}

export default function BackButton({label, href}: Props) {
  return (
    <Button
        variant={"link"}
        className='font-normal w-full'
        size={'sm'}
        asChild
    >
        <Link href={href}>
            {label}
        </Link>
    </Button>
  )
}