import React from 'react'

type Props = {}

export default function layout({children}: {children:React.ReactNode}) {
  return (
    <div className='h-full flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-400 to-slate-800'>
        {children}
    </div>
  )
}