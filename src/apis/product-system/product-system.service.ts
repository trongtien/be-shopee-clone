import { Injectable } from '@nestjs/common';
import { PageMetaDto } from 'src/libs/dto/response-list-base.dto';
import { ListProductSystemDTO } from './dto/list-product.-system.dto';
import { QueryProductSystemDto } from './dto/query-product-system.dto';

@Injectable()
export class ProductSystemService {

  fakeProductListData: ListProductSystemDTO = {
    id: 1,
    image: "https://cf.shopee.vn/file/7b52e519b8956724ea2246532e3b5806_tn",
    name: "Áo Khoác Bomber NEW YORK - phong cách nam nữ WILL SHOP chất nỉ bông cotton",
    price: 200000,
    price_discount: 100000,
    is_discount: 1,
    sold: "6.5k",
    address: "TP Hồ Chí Minh"
  }

  findAll(queryFillter: QueryProductSystemDto): PageMetaDto<ListProductSystemDTO>{
    // eslint-disable-next-line prefer-const
    let arrProduct: ListProductSystemDTO[] = [];

    // eslint-disable-next-line prefer-const
    let i = 0
    while(i < queryFillter.limit){
      arrProduct.push({
        ...this.fakeProductListData,
        id: i + 1
      })
      i++;
    }

    return {
      items: arrProduct,
      limit: queryFillter.limit,
      page: queryFillter.page
    };
  }
}
