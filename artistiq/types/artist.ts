export interface Snapshot {
  date: string;
  value: number;
}

export interface ValuationScore {
  name: string;
  score: number;
  weight: number;
}

export interface Artist {
  slug: string;
  name: string;
  genre: string[];
  label: string;
  score: number;
}

export interface ArtistDashboardData {
  artist: Artist;
  monthlyListeners: Snapshot[];
  valuationScores: ValuationScore[];
}
