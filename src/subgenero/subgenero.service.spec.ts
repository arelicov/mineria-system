import { Test, TestingModule } from '@nestjs/testing';
import { SubgeneroService } from './subgenero.service';

describe('SubgeneroService', () => {
  let service: SubgeneroService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubgeneroService],
    }).compile();

    service = module.get<SubgeneroService>(SubgeneroService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
