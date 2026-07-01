import type { bookType } from "../types/bookType";
import noBookCover from "../assets/noBookCover.jpeg";

export const getBookById = async (id: string): Promise<bookType | null> => {
  try {
    const token = import.meta.env.VITE_API_TOKEN;
    console.log(id);

    const response = await fetch("https://api.hardcover.app/v1/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        query: `
          query GetBookById($id: Int!) {
      books(where: {id: {_eq: $id}}) {
              id
              title
              image {
                url
              }
              rating
              ratings_count
              description
              pages
              release_year
              book_series {
                position
                series {
                  books_count
                  name
                }
              }
              contributions {
                author {
                  name
                }
              }
              genre: cached_tags(path: "Genre")
              content_warnings: cached_tags(path: "[\\"Content Warning\\"]")
            }
          }
        `,
        variables: { id: Number(id) },
      }),
    });

    const results = await response.json();

    if (results.errors) {
      console.error("API error:", results.errors[0].message);
      return null;
    }

    const book = results.data?.books?.[0];
    console.log("Fetched book:", book);

    if (!book) {
      return null;
    }

    const series = book.book_series?.[0];
    console.log("Fetched series:", series);

    return {
      id: book.id ?? null,
      userId: null,
      bookId: book.id ?? null,
      rank: null,
      readStatus: null,
      title: book.title ?? null,
      imageUrl: book.image?.url ?? noBookCover,
      authorNames: book.contributions?.[0]?.author?.name ?? "Unknown Author",
      description: book.description ?? null,
      pages: book.pages ?? null,
      releaseDate: book.release_year ?? null,
      series: series?.series?.name ?? null,
      seriesNames: series?.series?.name ?? null,
      positionInSeries: series?.position ?? null,
      numberOfBooksInSeries: series?.series?.books_count ?? null,
      genres: book.genre ?? null,
      contentWarnings: book.content_warnings ?? null,
    } as bookType;
  } catch (error) {
    console.error("Failed to fetch book:", error);
    return null;
  }
};
