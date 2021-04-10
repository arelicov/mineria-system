import { Test, TestingModule } from '@nestjs/testing';
import { SubgeneroController } from './subgenero.controller';
import { SubgeneroService } from './subgenero.service';

describe('SubgeneroController', () => {
  let controller: SubgeneroController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubgeneroController],
      providers: [SubgeneroService],
    }).compile();

    controller = module.get<SubgeneroController>(SubgeneroController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
