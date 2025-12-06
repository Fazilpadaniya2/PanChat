export type NewsItem = {
  id?: string
  category?: string
  title: string
  summary: string
  meta?: string
  ctaLabel?: string
}

export type NewsCardsProps = {
    news?: NewsItem[] | null
}
