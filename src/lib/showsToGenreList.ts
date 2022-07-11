import type { GenreMap } from "@/models/TvShow/GenreMap";
import type { GenreViewModel } from "@/models/TvShow/GenreViewModel";
import type { TvShowViewModel } from "@/models/TvShow/TvShowViewModel";

export function showsToGenreList(shows: TvShowViewModel[]): GenreViewModel[] {
  const genreMap: GenreMap = {};
  // Add genres from shows to the genreMap
  shows.forEach((show: TvShowViewModel) => {
    show.genres.forEach((genre) => {
      genreMap[genre] = genreMap[genre] ? [...genreMap[genre], show] : [show];
    });
  });

  // Sort keys in the genreMap alfabetically
  const sortedGenreMap: GenreMap = Object.keys(genreMap)
    .sort()
    .reduce(
      (acc, key) => ({
        ...acc,
        [key]: genreMap[key],
      }),
      {}
    );

  // Sort the shows for each genre based on the average rating
  Object.keys(sortedGenreMap).forEach((genreKey) => {
    sortedGenreMap[genreKey].sort(
      (a, b) => b.rating?.average - a.rating?.average
    );
  });

  // Map the genreMap to an Array for simpler interaction in the component
  const genreList = Object.keys(sortedGenreMap).map(
    (key) => ({ name: key, shows: sortedGenreMap[key] } as GenreViewModel)
  );

  return genreList;
}
