export declare class QueryBaseDTO {
    page: number;
    limit: number;
}
export declare class ReponseRepositoy<T> {
    status: boolean;
    error: string;
    data: T;
}
