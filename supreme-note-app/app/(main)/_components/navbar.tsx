"use client"

import { useQuery } from 'convex/react'
import { useParams } from 'next/navigation'
import { NavbarProps } from '@/types/main'
import React from 'react'
import { api } from '@/convex/_generated/api'
import { Id } from '@/convex/_generated/dataModel'
import { MenuIcon } from 'lucide-react'
import { Title } from '.'

const Navbar = ({isCollapsed, onResetWidth}: NavbarProps) => {
  const params = useParams()
  // This line means params.documentId is a string and if you want to make it compatible with the documentId which is type of id("documents") you have to import Id and pass in the "documents"
  const document = useQuery(api.documents.getById, {
    documentId: params.documentId as Id<"documents">
  })

  if(document === undefined){
    return (
      <nav className='bg-background dark:bg-[#1f1f1f] px-3 py-2 w-full flex items-center'>
        <Title.Skeleton />
      </nav>
    )
  }

  if(document === null){
    return null
  }

  return (
    <>
      <nav className='bg-background dark:bg-[#1f1f1f] px-3 py-2 w-full flex items-center gap-x-4'>
        {isCollapsed && (
          <MenuIcon role='button' onClick={onResetWidth} className='h-6 w-6 text-muted-foreground' />
        )}
        <div className='flex items-center justify-between w-full'>
          <Title initialData={document} />
        </div>
      </nav>
    </>
  )
}

export default Navbar