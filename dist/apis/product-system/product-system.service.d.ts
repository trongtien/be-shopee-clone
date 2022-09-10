import { PageMetaDto } from 'src/libs/dto/response-list-base.dto';
import { ListProductSystemDTO } from './dto/list-product.-system.dto';
import { QueryProductSystemDto } from './dto/query-product-system.dto';
export declare class ProductSystemService {
    fakeProductListData: ListProductSystemDTO;
    findAll(queryFillter: QueryProductSystemDto): PageMetaDto<ListProductSystemDTO>;
}
