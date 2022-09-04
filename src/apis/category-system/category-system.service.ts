import { Injectable } from '@nestjs/common';
import { TCategorySystem } from './category-system.type';


@Injectable()
export class CategorySystemService {
    

    CATEGORY_SYSTEM_HARD: TCategorySystem[] = [
        { id: "1", uuid: "1", name: "Áo Khoác"},
        { id: "2", uuid: "2", name: "Dép"},
        { id: "3", uuid: "3", name: "Túi Xách Nữ"},
        { id: "4", uuid: "4", name: "Váy"},
        { id: "5", uuid: "5", name: "Balo"},
        { id: "6", uuid: "6", name: "Quần Jean Nam"},
        { id: "7", uuid: "7", name: "Ốp iPhone"},
        { id: "8", uuid: "8", name: "Dép Nam"},
    ]

    getCategorySystem(): Promise<any> {
        return new Promise(resolve => {
            resolve(this.CATEGORY_SYSTEM_HARD);
        });
    }
}
