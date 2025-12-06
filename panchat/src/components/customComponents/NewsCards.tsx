import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { NewsCardsProps } from "@/dataTypes/NewsItem"


export function NewsCards({ news }: NewsCardsProps) {
  if (!news || news.length === 0) {
    return (
      <p className="text-xs text-muted-foreground">
        No news available.
      </p>
    )
  }

  return (
    <div className="space-y-3">
      {news.map((item, index) => (
        <Card
          key={item.id ?? index}
          className="border border-border/80 rounded-2xl shadow-sm bg-card/90"
        >
          <div className="p-4 space-y-2">
            {item.category && (
              <span className="text-xs font-medium uppercase text-blue-500 tracking-[0.12em]">
                {item.category}
              </span>
            )}

            <h2 className="text-base font-semibold leading-snug">
              {item.title}
            </h2>

            <p className="text-xs text-muted-foreground">
              {item.summary}
            </p>

            <div className="flex items-center justify-between pt-1">
              <span className="text-[11px] text-muted-foreground">
                {item.meta}
              </span>

              {item.ctaLabel && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-7 px-3 text-xs"
                >
                  {item.ctaLabel}
                </Button>
              )}
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
