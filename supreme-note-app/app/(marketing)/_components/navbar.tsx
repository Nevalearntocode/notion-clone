"use client"

import { useScrollTop } from '@/hooks'
import { cn } from '@/lib/utils'
import { Logo, Spinner } from '.'
import { ModeToggle } from '@/components/mode-toggle'
import { useConvexAuth } from 'convex/react'
import { SignInButton, UserButton } from '@clerk/clerk-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Navbar = () => {
  const {isAuthenticated, isLoading} = useConvexAuth()
  const scroll = useScrollTop()
  return (
    <div className={cn("z-50 bg-background dark:bg-[#1f1f1f] fixed top-0 flex items-center w-full p-6", scroll && "border-b shadow-sm")}>
      <Logo />
      <div className='md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2'>
        {isLoading && (
          <Spinner />
        )}
        {!isAuthenticated && !isLoading && (
          <>
            <SignInButton>
              <Button variant={`ghost`} size={`sm`}>
                Log in
              </Button>
            </SignInButton>
            <SignInButton>
              <Button variant={`ghost`} size={`sm`}>
                Get SNA for free
              </Button>
            </SignInButton>
          </>
        )}
        {isAuthenticated && !isLoading && (
          <>
            <Button variant={`ghost`} size={`sm`} asChild>
              <Link href={`/documents`}>
                Enter SNA
              </Link>
            </Button>
            <UserButton afterSignOutUrl='/' />
          </>
        )}
        <ModeToggle />
      </div>
    </div>
  )
}

export default Navbar