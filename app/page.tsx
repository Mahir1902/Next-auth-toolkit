import Image from 'next/image'
import { Poppins } from 'next/font/google'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import LoginButton from '@/components/auth/LoginButton'

const font = Poppins({
  subsets: ['latin'],
  weight: ['600']
})

export default function Home() {
  return (
    <main className='bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-400 to-slate-800 h-full flex flex-col items-center justify-center'>
      <div className='space-y-6 text-center'>
        <h1 className={cn('text-6xl font-semibold text-white drop-shadow-md', font.className)}>
          🔐Auth
        </h1>
        <p className='text-white text-lg'>
          A simple authentication service 
        </p>
        <LoginButton>

        <Button size={'lg'} variant={'secondary'}>
          Sign in
        </Button>
        </LoginButton>
      </div>
    </main>
  )
}
