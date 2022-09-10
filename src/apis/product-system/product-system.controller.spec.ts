import { Test, TestingModule } from '@nestjs/testing';
import { ProductSystemController } from './product-system.controller';
import { ProductSystemService } from './product-system.service';

describe('ProductSystemController', () => {
  let controller: ProductSystemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductSystemController],
      providers: [ProductSystemService],
    }).compile();

    controller = module.get<ProductSystemController>(ProductSystemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
