export interface IList {
    name: string;
    id: string;
    createdAt: number;
    lastModified: number;
    user: string;
    entries: IListFormEntry[];
}
