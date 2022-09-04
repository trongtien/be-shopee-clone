import { CategorySystemService } from './category-system.service';
export declare class CategorySystemController {
    private booksService;
    constructor(booksService: CategorySystemService);
    getCategoriSystem(): Promise<any>;
}
