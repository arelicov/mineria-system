import { Test, TestingModule } from '@nestjs/testing';
import { FormatoService } from './formato.service';

describe('FormatoService', () => {
  let service: FormatoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FormatoService],
    }).compile();

    service = module.get<FormatoService>(FormatoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
