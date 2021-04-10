import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductosModule } from './productos/productos.module';
import { CompraModule } from './compra/compra.module';
import { InventarioModule } from './inventario/inventario.module';
import { FormatoModule } from './formato/formato.module';
import { GeneroModule } from './genero/genero.module';
import { SucursalModule } from './sucursal/sucursal.module';
import { TrabajadoresModule } from './trabajadores/trabajadores.module';
import { SubgeneroModule } from './subgenero/subgenero.module';
import { ClienteModule } from './cliente/cliente.module';
import { MetodoEntregaModule } from './metodo-entrega/metodo-entrega.module';
import { MetodoPagoModule } from './metodo-pago/metodo-pago.module';
import { OcasionVentaModule } from './ocasion-venta/ocasion-venta.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: process.env.DATABASE_HOST,
      port: 3306,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_DB,
      synchronize: true,
      autoLoadEntities: true,
      // entities: [__dirname + 'entities/**/*entity.ts'],
    }),
    ProductosModule,
    CompraModule,
    InventarioModule,
    FormatoModule,
    GeneroModule,
    SucursalModule,
    TrabajadoresModule,
    SubgeneroModule,
    ClienteModule,
    MetodoEntregaModule,
    MetodoPagoModule,
    OcasionVentaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
