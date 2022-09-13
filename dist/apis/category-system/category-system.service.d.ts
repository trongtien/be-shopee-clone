import { PrismaServiceBase } from '../../libs/core/PrismaServiceBase';
import { TCategorySystem, TCategorySystemKeySearch } from './category-system.type';
export declare class CategorySystemService {
    private prisma;
    constructor(prisma: PrismaServiceBase);
    CATEGORY_SYSTEM_SEARCH_HARD: TCategorySystemKeySearch[];
    CATEGORY_SYSTEM_HARD: TCategorySystem[];
    getCategorySystemKeySearch(): Promise<TCategorySystemKeySearch[]>;
    getAllCategorySystem(): Promise<TCategorySystem[]>;
}
