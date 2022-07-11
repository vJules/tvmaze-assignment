import { describe, it, expect } from "vitest";
import { showsToGenreList } from "@/lib/showsToGenreList";
import { mockShowsList } from "../../mocks/tvShows";

const expectedGenres = [
  "Action",
  "Adventure",
  "Crime",
  "Drama",
  "Espionage",
  "Horror",
  "Music",
  "Mystery",
  "Romance",
  "Science-Fiction",
  "Supernatural",
  "Thriller",
];

describe("showsToGenreList", () => {
  it("should sort genres alphabetically", () => {
    const genreViewModel = showsToGenreList(mockShowsList);
    genreViewModel.forEach((genre, index) => {
      expect(genre.name).toEqual(expectedGenres[index]);
    });
  });

  it("should sort shows by highest average rating", () => {
    const genreViewModel = showsToGenreList(mockShowsList);
    genreViewModel.forEach((genre) => {
      for (let index = 0; index < genre.shows.length; index++) {
        const show = genre.shows[index];
        const nextShow = genre.shows[index + 1];
        if (nextShow) {
          expect(show.rating.average).toBeGreaterThanOrEqual(
            nextShow.rating.average
          );
        }
      }
    });
  });
});
