import { cn } from "@/lib/utils"

const segments = ["All", "Tech", "Finance"] as const
type Segment = (typeof segments)[number]

export function IphoneSegment({
  value,
  onChange,
}: {
  value: Segment
  onChange: (value: Segment) => void
}) {
  return (
    <div className="inline-flex items-center rounded-full bg-secondary px-1 py-1 gap-1">
      {segments.map((segment) => {
        const active = value === segment //value== segment can either be true or false if its true show it as active
        return (
          <button
            key={segment}
            onClick={() => onChange(segment)} //on click the filter becomes the one selected
            className={cn(
              "px-3 py-1 text-xs font-medium rounded-full transition-all",
              "min-w-[64px]",
              active
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {segment}
          </button>
        )
      })}
    </div>
  )
}
