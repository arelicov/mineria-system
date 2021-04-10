import { Test, TestingModule } from '@nestjs/testing';
import { OcasionVentaService } from './ocasion-venta.service';

describe('OcasionVentaService', () => {
  let service: OcasionVentaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OcasionVentaService],
    }).compile();

    service = module.get<OcasionVentaService>(OcasionVentaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
