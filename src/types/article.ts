export interface IArticle {
    id: number;
    title: string;
    url: string;
    image_url: string;
    summary: string;
    published_at: string;
}

export interface IArticleResponse {
    count: number;
    next: number | null;
    previous: number | null;
    results: IArticle[];
}