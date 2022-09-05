import { TCategorySystem, TCategorySystemKeySearch } from './category-system.type';
export declare class CategorySystemService {
    CATEGORY_SYSTEM_SEARCH_HARD: TCategorySystemKeySearch[];
    CATEGORY_SYSTEM_HARD: TCategorySystem[];
    getCategorySystemKeySearch(): Promise<TCategorySystemKeySearch[]>;
    getAllCategorySystem(): Promise<TCategorySystem[]>;
}
