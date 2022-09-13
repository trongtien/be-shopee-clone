import { Test, TestingModule } from '@nestjs/testing';
import { CommonAddressController } from './common-address.controller';
import { CommonAddressService } from './common-address.service';

describe('CommonAddressController', () => {
  let controller: CommonAddressController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommonAddressController],
      providers: [CommonAddressService],
    }).compile();

    controller = module.get<CommonAddressController>(CommonAddressController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
