export type bookType = {
  bookId: number | null;
  rank: number | null;
  readStatus: string | null;
  title: string | null;
  imageUrl: string | null;
  authorNames: string | null;
  description: string | null;
  pages: number | null;
  releaseDate: number | null;
  series: string | null;
  seriesNames: string | null;
  positionInSeries: number | null;
  numberOfBooksInSeries: number | null;
  genres: string[] | null;
  contentWarnings: string[] | null;
};
