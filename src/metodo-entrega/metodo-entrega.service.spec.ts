import { Test, TestingModule } from '@nestjs/testing';
import { MetodoEntregaService } from './metodo-entrega.service';

describe('MetodoEntregaService', () => {
  let service: MetodoEntregaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MetodoEntregaService],
    }).compile();

    service = module.get<MetodoEntregaService>(MetodoEntregaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
