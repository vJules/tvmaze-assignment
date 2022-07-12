import type { TvShowSearchResponse } from "@/models/TvShow/TvShowSearchResponse";
import type { TvShowListResponse } from "@/models/TvShow/TvShowListResponse";
import type { TvShowViewModel } from "@/models/TvShow/TvShowViewModel";
import axios from "axios";
export const getShows = () => {
  return axios.get(`https://api.tvmaze.com/shows`).then((response) => {
    if (response.status != 200) {
      throw response.status;
    } else {
      const { data } = response;
      return data.map((show: TvShowListResponse) => {
        return {
          ...show,
          _links: {
            previousepisode: show._links.previousepisode?.href,
            self: show._links.self?.href,
          },
        } as TvShowViewModel;
      });
    }
  });
};

export const searchShowsByName = (query: string) => {
  return axios
    .get(`https://api.tvmaze.com/search/shows?q=${query}`)
    .then((response) => {
      if (response.status != 200) {
        throw response.status;
      } else {
        const { data } = response;
        return data.map((show: TvShowSearchResponse) => {
          return {
            score: show.score,
            ...show.show,
            _links: {
              previousepisode: show.show._links.previousepisode?.href,
              self: show.show._links.self?.href,
            },
          } as TvShowViewModel;
        });
      }
    });
};

export const getShowById = (id: string) => {
  return axios
    .get(`https://api.tvmaze.com/shows/${id}`)
    .then(function (response) {
      if (response.status != 200) {
        throw response.status;
      } else {
        return response.data;
      }
    });
};
