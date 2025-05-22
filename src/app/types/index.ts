export interface NewsArticle {
    title: string;
    description: string;
    url: string;
    urlToImage?: string;
}

export interface PageProps {
    searchParams?: {
        category?: string;
        q?: string;
    };
}