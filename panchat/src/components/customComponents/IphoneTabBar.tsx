import { Home, Globe2, User } from "lucide-react"
import { cn } from "@/lib/utils"

type Tab = "home" | "world" | "profile"

export function IphoneTabBar({
  value,
  onChange,
}: {
  value: Tab
  onChange: (value: Tab) => void
}) {
  const tabs: { key: Tab; label: string; icon: any }[] = [
    { key: "home", label: "Today", icon: Home },
    { key: "world", label: "Explore", icon: Globe2 },
    { key: "profile", label: "Profile", icon: User },
  ]

  return (
    <nav className="fixed bottom-0 inset-x-0 border-t border-border bg-background/90 backdrop-blur-xl">
      <div className="flex items-center justify-around py-2">
        {tabs.map(({ key, label, icon: Icon }) => {
          const active = value === key
          return (
            <button
              key={key}
              onClick={() => onChange(key)}
              className="flex flex-col items-center gap-1 text-[11px]"
            >
              <Icon
                className={cn(
                  "h-5 w-5",
                  active ? "text-primary" : "text-muted-foreground"
                )}
              />
              <span
                className={cn(
                  "font-medium",
                  active ? "text-primary" : "text-muted-foreground"
                )}
              >
                {label}
              </span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
