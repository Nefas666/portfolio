export interface Project {
    name: string;
    id: string;
    description: string;
    stargazers_count: number;
    created_at: string | number | Date;
    updated_at?: string;
    html_url: string;
    topics: string[];
}

export interface ProjectListProps {
    heroes: Project[];
    sorted: Project[];
}