import type { TvShowSearchResponse } from "@/models/TvShow/TvShowSearchResponse";
import type { TvShowListResponse } from "@/models/TvShow/TvShowListResponse";
import type { TvShowViewModel } from "@/models/TvShow/TvShowViewModel";

export const getShows = () => {
  return fetch(`https://api.tvmaze.com/shows`, {
    method: "GET",
  }).then(function (response) {
    if (response.status != 200) {
      throw response.status;
    } else {
      return response
        .json()
        .then((data: TvShowListResponse[]): TvShowViewModel[] => {
          return data.map((show) => {
            return {
              ...show,
              _links: {
                previousepisode: show._links.previousepisode?.href,
                self: show._links.self?.href,
              },
            } as TvShowViewModel;
          });
        });
    }
  });
};

export const searchShowsByName = (query: string) => {
  return fetch(`https://api.tvmaze.com/search/shows?q=${query}`, {
    method: "GET",
  }).then(function (response) {
    if (response.status != 200) {
      throw response.status;
    } else {
      return response
        .json()
        .then((data: TvShowSearchResponse[]): TvShowViewModel[] => {
          return data.map((show) => {
            return {
              score: show.score,
              ...show.show,
              _links: {
                previousepisode: show.show._links.previousepisode?.href,
                self: show.show._links.self?.href,
              },
            } as TvShowViewModel;
          });
        });
    }
  });
};

export const getShowById = (id: string) => {
  return fetch(`https://api.tvmaze.com/shows/${id}`, {
    method: "GET",
  }).then(function (response) {
    if (response.status != 200) {
      throw response.status;
    } else {
      return response.json();
    }
  });
};
