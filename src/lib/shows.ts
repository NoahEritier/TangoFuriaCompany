import { shows, seasonBlocks, type Show, type SeasonBlock } from "@/content/shows";

export function getShows(): Show[] {
  return shows;
}

export function getShow(slug: string): Show | undefined {
  return shows.find((s) => s.slug === slug);
}

export function getSeasonBlocks(): SeasonBlock[] {
  return [...seasonBlocks].sort((a, b) => a.id.localeCompare(b.id));
}

export function getUpcomingTeaser(limit = 3): Show[] {
  return shows.slice(0, limit);
}
