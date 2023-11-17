"use client"

import React from 'react'
import { useQuery } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { DocumentIdPageProps } from '@/types/main'
import Toolbar from '@/components/toolbar'

const DocumentIdPage = ({params}:DocumentIdPageProps) => {
  const document = useQuery(api.documents.getById, {documentId: params.documentId })

  if(document === undefined){
    return (
      <div>
        Loading...
      </div>
    )
  }

  if(document === null){
    return null
  }

  return (
    <div className='pb-40'>
      <div className='h-[35vh]' />
      <div className='md:max-w-3xl lg:max-w-4xl mx-auto'>
        <Toolbar initialData={document} />
      </div>
  </div>
  )
}

export default DocumentIdPage