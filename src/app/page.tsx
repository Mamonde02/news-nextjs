export const dynamic = "force-dynamic";

import { fetchTopHeadlines } from "./lib/news";
import { NewsArticle, PageProps } from "./types";
import ArticleCard from "./components/ArticleCard";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";



export default async function Home({ searchParams }: PageProps) {
  // const category = searchParams?.category ?? "";
  // const query = searchParams?.q ?? "";
  const actualParams = await searchParams; // fix await server crash
  console.log("type::", typeof actualParams);


  const category = actualParams?.category ?? "";
  const query = actualParams?.q ?? "";

  let articles: NewsArticle[] = [];

  try {
    articles = await fetchTopHeadlines(category, query);
  } catch (error) {
    console.error("Error fetching news:", error);
  }

  return (
    <main className="p-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6 text-indigo-600">News Headlines</h1>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <SearchBar />
        <CategoryFilter />
      </div>

      {articles.length === 0 ? (
        <p className="text-center text-gray-500">No news found.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <ArticleCard key={index} article={article} />
          ))}
        </div>
      )}
    </main>
  );
}



// // interface PageProps {
// //   searchParams?: {
// //     category?: string;
// //     q?: string;
// //   };
// // }

// interface PageProps {
//   searchParams?: Record<string, string | undefined>;
// }


// export default async function Home({ searchParams }: PageProps) {
//   const actualParams = await searchParams; // fix await server crash
//   console.log("type::", typeof actualParams);


//   const category = actualParams?.category ?? "";
//   const query = actualParams?.q ?? "";

//   // const category = searchParams?.category ?? "";
//   // const query = searchParams?.q ?? "";

//   // export default async function Home(props: PageProps) {
//   //   const actualParams = await props.searchParams; // this is not usual, but fixes the crash
//   //   const category = actualParams?.category ?? "";
//   //   const query = actualParams?.q ?? "";

//   // console.log("searchParams   ..................", searchParams);

//   const articles = await fetchTopHeadlines(category, query);

//   return (
//     <main className="p-4 max-w-6xl mx-auto">
//       <h1 className="text-3xl font-bold text-center mb-6">News Headlines</h1>

//       <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
//         <SearchBar />
//         <CategoryFilter />
//       </div>

//       {articles.length === 0 ? (
//         <p className="text-center text-gray-500">No news found.</p>
//       ) : (
//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {articles.map((article, index) => (
//             <ArticleCard key={index} article={article} />
//           ))}
//         </div>
//       )}
//     </main>
//   );
// }