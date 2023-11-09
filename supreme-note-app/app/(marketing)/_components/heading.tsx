"use-client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

const Header = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Everything your notes will ever need. Welcome to <span className="underline">SNA</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Write notes with multiple convenient features, you're welcome
      </h3>
      <Button>
        Enter SNA
        <ArrowRight className="h-4 w-4 ml-2" />
      </Button>
    </div>
  )
}

export default Header