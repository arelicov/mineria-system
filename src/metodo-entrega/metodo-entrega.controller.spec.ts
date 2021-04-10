import { Test, TestingModule } from '@nestjs/testing';
import { MetodoEntregaController } from './metodo-entrega.controller';
import { MetodoEntregaService } from './metodo-entrega.service';

describe('MetodoEntregaController', () => {
  let controller: MetodoEntregaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MetodoEntregaController],
      providers: [MetodoEntregaService],
    }).compile();

    controller = module.get<MetodoEntregaController>(MetodoEntregaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
