export interface Schedule {
  time: string;
  days: string[];
}

export interface Rating {
  average: number;
}

export interface Country {
  name: string;
  code: string;
  timezone: string;
}

export interface Network {
  id: number;
  name: string;
  country: Country;
  officialSite?: string;
}

export interface Externals {
  tvrage: number;
  thetvdb: number;
  imdb: string;
}

export interface Image {
  medium: string;
  original: string;
}

export interface Links {
  self: string;
  previousepisode: string;
}

export interface TvShowViewModel {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number;
  averageRuntime: number;
  premiered: string;
  ended: string;
  officialSite: string;
  schedule: Schedule;
  rating: Rating;
  weight: number;
  network: Network;
  webChannel?: unknown;
  dvdCountry?: unknown;
  externals: Externals;
  image: Image;
  summary: string;
  updated: number;
  _links: Links;
}
