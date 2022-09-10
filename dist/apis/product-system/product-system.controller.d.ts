import { QueryProductSystemDto } from './dto/query-product-system.dto';
import { ProductSystemService } from './product-system.service';
import { ListProductSystemDTO } from './dto/list-product.-system.dto';
export declare class ProductSystemController {
    private readonly productSystemService;
    constructor(productSystemService: ProductSystemService);
    findAll(query: QueryProductSystemDto): ListProductSystemDTO[];
}
