import { Test, TestingModule } from '@nestjs/testing';
import { CategorySystemController } from './category-system.controller';

describe('CategorySystemController', () => {
  let controller: CategorySystemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategorySystemController],
    }).compile();

    controller = module.get<CategorySystemController>(CategorySystemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
