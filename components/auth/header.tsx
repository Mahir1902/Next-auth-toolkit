import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
    subsets: ['latin'],
    weight: [
        '600'
    ]
})

import React from 'react'

type Props = {
    label:string
}

export default function Header({label}: Props) {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center">
        <h1 className={cn('text-3xl font-semibold', font.className)}>
            🔐 Auth
        </h1>
        <p className="text-muted-foreground text-sm">
            {label}
        </p>
    </div>
  )
}