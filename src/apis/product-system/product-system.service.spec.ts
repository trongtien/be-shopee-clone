import { Test, TestingModule } from '@nestjs/testing';
import { ProductSystemService } from './product-system.service';

describe('ProductSystemService', () => {
  let service: ProductSystemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductSystemService],
    }).compile();

    service = module.get<ProductSystemService>(ProductSystemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
