import axios from "axios";
import { NewsArticle } from "../types";


export async function fetchTopHeadlines(category?: string, query?: string): Promise<NewsArticle[]> {
    const params: Record<string, string> = {
        country: "us",
        apiKey: process.env.NEWS_API_KEY!,
    };

    if (category) params.category = category;
    if (query) params.q = query;

    try {
        const res = await axios.get("https://newsapi.org/v2/top-headlines", { params });
        return res.data.articles as NewsArticle[];
    } catch (error) {
        console.error("Axios error:", error);
        throw new Error("Failed to fetch news with axios");
    }
}






// export interface NewsArticle {
//     title: string;
//     description: string;
//     url: string;
//     urlToImage?: string;
// }

// export async function fetchTopHeadlines(category?: string, query?: string): Promise<NewsArticle[]> {
//     const url = new URL("https://newsapi.org/v2/top-headlines");
//     url.searchParams.append("country", "us");
//     if (category) url.searchParams.append("category", category);
//     if (query) url.searchParams.append("q", query);
//     url.searchParams.append("apiKey", process.env.NEWS_API_KEY!);

//     const res = await fetch(url.toString());

//     if (!res.ok) {
//         throw new Error("Failed to fetch news");
//     }

//     const data = await res.json();

//     return data.articles as NewsArticle[];
// }


// export interface NewsArticle {
//     title: string;
//     description: string;
//     url: string;
//     urlToImage?: string;
// }


// export async function fetchTopHeadlines(
//     category?: string,
//     query?: string
// ): Promise<NewsArticle[]> {
//     const url = new URL("https://newsapi.org/v2/top-headlines");
//     url.searchParams.append("country", "us");
//     if (category) url.searchParams.append("category", category);
//     if (query) url.searchParams.append("q", query);
//     url.searchParams.append("apiKey", process.env.NEWS_API_KEY!);

//     const res = await fetch(url.toString());
//     const data = await res.json();

//     return data.articles as NewsArticle[];
// }


// export async function fetchTopHeadlines(category?: string, query?: string) {
//     const apiKey = process.env.NEWS_API_KEY;
//     const baseUrl = `https://newsapi.org/v2/top-headlines?country=us`;

//     let url = `${baseUrl}&apiKey=${apiKey}`;

//     if (category) {
//         url += `&category=${category}`;
//     }

//     if (query) {
//         url += `&q=${encodeURIComponent(query)}`;
//     }

//     const response = await axios.get(url);
//     return response.data.articles;
// }

