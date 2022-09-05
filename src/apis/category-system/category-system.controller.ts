import { Controller, Get, UseGuards } from '@nestjs/common';
import RoleGuard from '../../libs/role/role-guard';
import { Role_Get_Api } from '../../enums/role.enum';
import { CategorySystemService } from './category-system.service';
import { ApiHeader, ApiOkResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CategorySystemKeySearchSchema, CategorySystemSchema } from './categoty-system.schema';
@Controller('category-system')
@ApiTags('category-system')
export class CategorySystemController {
    constructor(private categoryService: CategorySystemService) {}

    @Get("key-search")
    @ApiHeader({
        name: 'x-api-key-system',
        description: 'Key get api',
    })
    @UseGuards(RoleGuard(Role_Get_Api.SYSTEM))
    @ApiResponse({ status: 201, description: 'Get Susscess full'})
    @ApiResponse({ status: 403, description: 'Forbidden'})
    @ApiOkResponse({ status: 200,  type: CategorySystemKeySearchSchema })
    async getCategoriSystemKeySeach() {
        const categoriesKeySearch = await this.categoryService.getCategorySystemKeySearch();
        return categoriesKeySearch;
    }

    @Get("")
    @ApiHeader({
        name: 'x-api-key-system',
        description: 'Key get api',
    })
    @UseGuards(RoleGuard(Role_Get_Api.SYSTEM))
    @ApiResponse({ status: 201, description: 'Get Susscess full'})
    @ApiResponse({ status: 403, description: 'Forbidden'})
    @ApiOkResponse({ status: 200,  type: CategorySystemSchema })
    async getCategoriSystem(){
        const categories = await this.categoryService.getAllCategorySystem();
        return categories
    }
}
