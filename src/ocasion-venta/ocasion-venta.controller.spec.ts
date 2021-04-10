import { Test, TestingModule } from '@nestjs/testing';
import { OcasionVentaController } from './ocasion-venta.controller';
import { OcasionVentaService } from './ocasion-venta.service';

describe('OcasionVentaController', () => {
  let controller: OcasionVentaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OcasionVentaController],
      providers: [OcasionVentaService],
    }).compile();

    controller = module.get<OcasionVentaController>(OcasionVentaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
