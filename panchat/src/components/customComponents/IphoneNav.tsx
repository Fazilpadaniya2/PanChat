import { cn } from "@/lib/utils"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export function IphoneNav() {
  return (
    <header className="sticky top-0 z-20 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="px-4 pt-3 pb-2 flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full h-8 w-8 text-primary"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <span className="text-sm text-muted-foreground">Today</span>
      </div>
      <div className="px-4 pb-3">
        <h1 className="text-3xl font-semibold tracking-tight">
          PanChat
        </h1>
       
      </div>
    </header>
  )
}
