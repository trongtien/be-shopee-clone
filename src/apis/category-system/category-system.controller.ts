import { Controller, Get } from '@nestjs/common';
import { CategorySystemService } from './category-system.service';


@Controller('category-system')
export class CategorySystemController {
    constructor(private booksService: CategorySystemService) {}

    @Get()
    async getCategoriSystem() {
        const books = await this.booksService.getCategorySystem();
        return books;
    }
}
