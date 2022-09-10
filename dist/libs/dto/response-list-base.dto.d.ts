export declare class PageMetaDto<T> {
    readonly items: T[];
    readonly page: number;
    readonly limit: number;
    constructor({ page, limit }: {
        page: any;
        limit: any;
    });
}
