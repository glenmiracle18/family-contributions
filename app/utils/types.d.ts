export interface Identifiable {
    id: string;
}

type SortOrder = 'asc' | 'desc';

interface PageableSortbaleArgs {
    page?: number;
    pageSize?: number;
    sort?: { column: string; order: SortOrder };
    query?: string;
}
