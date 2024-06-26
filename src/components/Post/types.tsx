export interface PostData {
    title: string;
    summary: string;
    tags: string[];
    slug: string;
    date: string; // Assuming date is in 'YYYY-MM-DD' format
}

export type PostMetadata = {
    title: string;
    summary: string;
    tags: string[];
    slug: string;
    date: string;
    year: string;
};