import { Module } from '@nestjs/common';
import { CompraService } from './compra.service';
import { CompraController } from './compra.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Compra } from './entities/compra.entity';
import { TrabajadoresModule } from '../trabajadores/trabajadores.module';
import { TrabajadoresService } from '../trabajadores/trabajadores.service';
import { ProductosModule } from '../productos/productos.module';
import { ProductosService } from '../productos/productos.service';
import { MetodoPagoModule } from '../metodo-pago/metodo-pago.module';
import { MetodoPagoService } from '../metodo-pago/metodo-pago.service';
import { OcasionVentaModule } from '../ocasion-venta/ocasion-venta.module';
import { OcasionVentaService } from '../ocasion-venta/ocasion-venta.service';
import { MetodoEntregaModule } from '../metodo-entrega/metodo-entrega.module';
import { MetodoEntregaService } from '../metodo-entrega/metodo-entrega.service';
import { ClienteModule } from '../cliente/cliente.module';
import { ClienteService } from '../cliente/cliente.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Compra]),
    ClienteModule,
    TrabajadoresModule,
    ProductosModule,
    MetodoPagoModule,
    OcasionVentaModule,
    MetodoEntregaModule,
  ],
  controllers: [CompraController],
  providers: [
    CompraService,
    ClienteService,
    TrabajadoresService,
    ProductosService,
    MetodoPagoService,
    OcasionVentaService,
    MetodoEntregaService,
  ],
})
export class CompraModule {}
