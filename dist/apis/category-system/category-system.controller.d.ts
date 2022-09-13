import { CategorySystemService } from './category-system.service';
export declare class CategorySystemController {
    private readonly categoryService;
    constructor(categoryService: CategorySystemService);
    getCategoriSystemKeySeach(): Promise<import("./category-system.type").TCategorySystemKeySearch[]>;
    getCategoriSystem(): Promise<import("./category-system.type").TCategorySystem[]>;
}
