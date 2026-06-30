import type { bookSearchType } from "../types/bookSearchType";

export const getBooksByTitle = async (
  title: string,
): Promise<bookSearchType[] | null> => {
  try {
    const token = import.meta.env.VITE_API_TOKEN;
    const data = await fetch("https://api.hardcover.app/v1/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        query: `
                    query SearchBook {
                        search(query: "${title}", query_type: "books", per_page: 10, page: 1) {
                            results
                        }
                    }
                `,
      }),
    });

    const raw = await data.json();
    const results = typeof raw === "string" ? JSON.parse(raw) : raw;
    // Check for API errors
    if (results.errors) {
      console.error("API error:", results.errors[0].message);
      return null;
    }

    if (results.data.search.results.found === 0) {
      return null;
    }

    console.log(results);
    return results.data.search.results.hits.map((hit: any) => ({
      id: hit.document.id,
      title: hit.document.title,
      image: hit.document.image?.url,
      author: hit.document.contributions[0]?.author.name,
    })) as bookSearchType[];
  } catch (error) {
    console.error("Failed to fetch books:", error);
    return null;
  }
};
