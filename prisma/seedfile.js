import { prisma } from "../config/db.js";

const creatorId = "1";

const books = [
  {
    userId: 1,
    bookId: 97,
    rank: 1,
    readStatus: "READ",
    title: "The Name of the Wind",
    imageUrl: "https://example.com/nameofthewind.jpg",
    genres: ["Fantasy", "Adventure", "Magic"],
    authorNames: "Patrick Rothfuss",
    description:
      "A legendary wizard recounts his youth and the pursuit of knowledge, love, and revenge.",
    pages: 662,
    releaseDate: 2007,
    series: "The Kingkiller Chronicle",
    seriesNames: "The Kingkiller Chronicle",
    positionInSeries: 1,
    numberOfBooksInSeries: 3,
    contentWarnings: ["Violence", "Death"],
  },
  {
    userId: 1,
    bookId: 978,
    rank: 2,
    readStatus: "READ",
    title: "Dune",
    imageUrl: "https://example.com/dune.jpg",
    genres: ["Sci-Fi", "Politics", "Philosophy"],
    authorNames: "Frank Herbert",
    description:
      "A young nobleman leads a rebellion on a desert planet to control the most valuable substance in the universe.",
    pages: 412,
    releaseDate: 1965,
    series: "Dune Chronicles",
    seriesNames: "Dune Chronicles",
    positionInSeries: 1,
    numberOfBooksInSeries: 6,
    contentWarnings: ["Violence", "Betrayal"],
  },
  {
    userId: 1,
    bookId: 9,
    rank: 3,
    readStatus: "READ",
    title: "Project Hail Mary",
    imageUrl: "https://example.com/projecthailmary.jpg",
    genres: ["Sci-Fi", "Survival", "Humor"],
    authorNames: "Andy Weir",
    description:
      "A lone astronaut wakes up with amnesia and must save humanity from an extinction-level threat.",
    pages: 476,
    releaseDate: 2021,
    series: null,
    seriesNames: null,
    positionInSeries: null,
    numberOfBooksInSeries: null,
    contentWarnings: ["Isolation"],
  },
  {
    userId: 1,
    bookId: 900,
    rank: 4,
    readStatus: "READ",
    title: "The Hobbit",
    imageUrl: "https://example.com/hobbit.jpg",
    genres: ["Fantasy", "Adventure"],
    authorNames: "J.R.R. Tolkien",
    description:
      "A reluctant hobbit embarks on a quest to reclaim a dwarf kingdom from a dragon.",
    pages: 310,
    releaseDate: 1937,
    series: "The Lord of the Rings prequel",
    seriesNames: "Middle-earth",
    positionInSeries: 0,
    numberOfBooksInSeries: 1,
    contentWarnings: ["Violence", "Peril"],
  },
  {
    userId: 1,
    bookId: 94,
    rank: 5,
    readStatus: "READ",
    title: "The Shining",
    imageUrl: "https://example.com/shining.jpg",
    genres: ["Horror", "Psychological"],
    authorNames: "Stephen King",
    description:
      "A family isolated in a haunted hotel faces madness and supernatural terror.",
    pages: 447,
    releaseDate: 1977,
    series: "The Shining series",
    seriesNames: "The Shining series",
    positionInSeries: 1,
    numberOfBooksInSeries: 2,
    contentWarnings: ["Violence", "Child abuse", "Alcoholism"],
  },
  {
    userId: 1,
    bookId: 92,
    rank: 6,
    readStatus: "READ",
    title: "Sapiens: A Brief History of Humankind",
    imageUrl: "https://example.com/sapiens.jpg",
    genres: ["Non-fiction", "History", "Anthropology"],
    authorNames: "Yuval Noah Harari",
    description:
      "Explores the history of Homo sapiens from evolution to modern society.",
    pages: 443,
    releaseDate: 2011,
    series: null,
    seriesNames: null,
    positionInSeries: null,
    numberOfBooksInSeries: null,
    contentWarnings: ["Human suffering discussion"],
  },
  {
    userId: 1,
    bookId: 89,
    rank: 7,
    readStatus: "NOT_READ",
    title: "Hyperion",
    imageUrl: "https://example.com/hyperion.jpg",
    genres: ["Sci-Fi", "Space Opera", "Literary"],
    authorNames: "Dan Simmons",
    description:
      "Seven pilgrims journey to a dangerous planet to confront a mysterious creature.",
    pages: 482,
    releaseDate: 1989,
    series: "Hyperion Cantos",
    seriesNames: "Hyperion Cantos",
    positionInSeries: 1,
    numberOfBooksInSeries: 4,
    contentWarnings: ["Violence", "Body horror"],
  },
  {
    userId: 1,
    bookId: 25,
    rank: 8,
    readStatus: "READ",
    title: "The Martian",
    imageUrl: "https://example.com/martian.jpg",
    genres: ["Sci-Fi", "Survival"],
    authorNames: "Andy Weir",
    description:
      "An astronaut stranded on Mars uses science to survive and find a way home.",
    pages: 369,
    releaseDate: 2011,
    series: null,
    seriesNames: null,
    positionInSeries: null,
    numberOfBooksInSeries: null,
    contentWarnings: ["Peril"],
  },
  {
    userId: 1,
    bookId: 9145,
    rank: 9,
    readStatus: "NOT_READ",
    title: "Crime and Punishment",
    imageUrl: "https://example.com/crimeandpunishment.jpg",
    genres: ["Classic", "Psychological Fiction", "Philosophy"],
    authorNames: "Fyodor Dostoevsky",
    description:
      "A young man commits a murder and spirals into guilt, paranoia, and moral conflict.",
    pages: 671,
    releaseDate: 1866,
    series: null,
    seriesNames: null,
    positionInSeries: null,
    numberOfBooksInSeries: null,
    contentWarnings: ["Violence", "Murder", "Mental illness"],
  },
  {
    userId: 1,
    bookId: 3,
    rank: 10,
    readStatus: "NOT_READ",
    title: "The Priory of the Orange Tree",
    imageUrl: "https://example.com/priory.jpg",
    genres: ["Fantasy", "Dragons", "Epic"],
    authorNames: "Samantha Shannon",
    description:
      "A standalone epic about dragons, queens, and a secret society protecting the world.",
    pages: 848,
    releaseDate: 2019,
    series: "The Roots of Chaos",
    seriesNames: "The Roots of Chaos",
    positionInSeries: 1,
    numberOfBooksInSeries: 2,
    contentWarnings: ["Violence", "Death", "Blood"],
  },
];

const main = async () => {
  console.log("Seeding books....");

  for (const book of books) {
    await prisma.book.create({
      data: book,
    });
    console.log(`Created book Tiltle : ${book.title}`);
  }
  console.log("Seeding done");
};

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
