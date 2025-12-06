import { IphoneNav } from '../components/customComponents/IphoneNav'
import { NewsCards } from '../components/customComponents/NewsCards'
import { IphoneSegment } from '../components/customComponents/IphoneSegment'
import { IphoneTabBar } from '../components/customComponents/IphoneTabBar'
import { createContext, useContext, useState, useEffect } from 'react'
import type { NewsItem } from '@/dataTypes/NewsItem'

export function Home() {
    const [filter, setFilter] = useState<"All" | "Tech" | "Finance">("All")

  // tab = which bottom tab is active (home / world / profile, etc.)
  const [tab, setTab] = useState<"home" | "world" | "profile">("home")

  const [allnews, setAllNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    
      //here we will set the news as captured from the apisss and render them accordingly, two things we can do
      //either we load all the news and filter them by genre late or fetch them exactly when the genre is
    if (filter === "All") {
    setAllNews( [

     {
      id: "1",
      category: "Finance",
      title: "Global markets react to unexpected policy shift",
      summary:
        "Short-term volatility rises but long-term market confidence continues.",
      meta: "2 min • 8 sources",
      ctaLabel: "Read more",
    },
    {
      id: "2",
      category: "Tech",
      title: "AI models reshape newsroom workflows",
      summary:
        "Editors rely on AI for initial drafts, but final judgment remains human.",
      meta: "1 min • 5 sources",
      ctaLabel: "Open article",
    },

])

}else{
    setAllNews([]);
}
    
    
  }, [filter])
  
  
  return(
    <>
    
     <div className="min-h-screen bg-background text-foreground flex flex-col">
      <IphoneNav />

      <main className="flex-1 px-4 pb-20 space-y-4">
        {/* Segmented control */}
        <div className="mt-2 flex justify-center">
          <IphoneSegment value={filter} onChange={setFilter} />
        </div>

        {/* News list – now correctly passed as a prop */}
        <div className="space-y-3">
        <NewsCards  news = {allnews}/>
        </div>
      </main>

      <IphoneTabBar value={tab} onChange={setTab} />
    </div>
    </>
  )
}