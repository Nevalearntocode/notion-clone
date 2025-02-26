"use client"

import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"
import { ItemProps } from "@/types/main"
import { ChevronDown, ChevronRight, MoreHorizontal, Plus, Trash } from "lucide-react"
import { useMutation } from 'convex/react'
import React from "react"
import { api } from "@/convex/_generated/api"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuSeparator, DropdownMenuContent, DropdownMenuItem} from "@/components/ui/dropdown-menu"
import { useUser } from "@clerk/clerk-react"

const Item = ({id, active, documentIcon, isSearch, expanded, level = 0, onExpand, label, icon: Icon, onClick} : ItemProps) => {
  const ChevronIcon = expanded ? ChevronDown : ChevronRight
  const create = useMutation(api.documents.create)
  const router = useRouter()
  const {user} = useUser()
  const archive = useMutation(api.documents.archive)

  const onArchive = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation()
    if(!id) return
    const promise = archive({id}).then(() => router.push(`/documents`))

    toast.promise(promise, {
      loading: "Moving to trash...",
      success: "Note moved to trash!",
      error: "Failed to archive note."
    })
  }

  const onCreate = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
    if (!id) return
    const promise = create({title: "Untitled", parentDocument: id}).then((documentId) => {
      if(!expanded){
        onExpand?.()
      }
      router.push(`/documents/${documentId}`)
    })
    toast.promise(promise, {
      loading: "Creating a new note...",
      success: "Note created!",
      error: "Failed to create new note."
    })
  }

  const handleExpand = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
    onExpand?.()
  }

  return (
    <div onClick={onClick} role="button" style={{paddingLeft: level ? `${(level*12)+12}px` : "12px"}} className={cn("group min-h-[27px] text-sm py-1 flex pr-3 w-full hover:bg-primary/5 items-center text-muted-foreground font-medium", active && "bg-primary/5 text-primary")}>
      {!!id && (
        <div role="button" className="h-full rounded-sm hover:bg-neutral-300 dark:hover:bg-neutral-600 mr-1" onClick={handleExpand}>
          <ChevronIcon className="h-4 w-4 shrink-0 text-muted-foreground/50" />
        </div>
      )}
      {documentIcon? (
        <div className="shrink-0 mr-2 text-[18px]">
          {documentIcon} 
        </div>
      ) : (
        <Icon className="shrink-0 h-[18px] w-[18px] mr-2 text-muted-foreground" />
      )}
      <span className="truncate">
        {label}
      </span>
      {isSearch && (
        <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">
            ctrl+k
          </span>
        </kbd>
      )}
      {!!id && (
        <div className="ml-auto flex items-center gap-x-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild onClick={(e) => e.stopPropagation()}>
              <div role="button" className="opacity-0 group-hover:opacity-100 h-full ml-auto rounded-sm hover:bg-neutral-300 dark:hover:bg-neutral-600">
                <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-60" align="start" side="right" forceMount>
              <DropdownMenuItem onClick={onArchive}>
                <Trash className="h-4 w-4 mr-2" />
                Delete
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <div className="text-xs text-muted-foreground p-2">
                Last edited by: {user?.fullName}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="opacity-0 group-hover:opacity-100 h-full ml-auto rounded-sm hover:bg-neutral-300 dark:bg-neutral-600" role="button" onClick={onCreate}>
            <Plus className="h-4 w-4 text-muted-foreground" />
          </div>
        </div>
      )}
    </div>
  )
}

Item.Skeleton = function ItemSkeleton({level}: {level?: number}){
  return (
    <div style={{paddingLeft: level ? `${(level * 12) + 25}px` : "12px"}} className="flex gap-x-2 py-[3px]">
      <Skeleton className="h-4 w-4" />
      <Skeleton className="h-4 w-[30%]" />
    </div>
  )
}

export default Item