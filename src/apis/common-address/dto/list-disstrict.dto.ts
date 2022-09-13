
export class ListDistrictDto {
    uuid: string;

    districtId: string;
    provinceId: string;
    name: string;

    constructor(partial: Partial<ListDistrictDto>) {
        Object.assign(this, partial);
    }
}