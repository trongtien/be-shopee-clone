import { QueryProductSystemDto } from './dto/query-product-system.dto';
import { ProductSystemService } from './product-system.service';
import { ListProductSystemDTO } from './dto/list-product.-system.dto';
import { PageMetaDto } from '../../libs/dto/response-list-base.dto';
export declare class ProductSystemController {
    private productSystemService;
    constructor(productSystemService: ProductSystemService);
    findAll(query: QueryProductSystemDto): PageMetaDto<ListProductSystemDTO>;
}
