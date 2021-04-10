import { Module } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { ProductosController } from './productos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Productos } from './entities/productos.entity';
import { FormatoModule } from '../formato/formato.module';
import { FormatoService } from '../formato/formato.service';
import { GeneroService } from '../genero/genero.service';
import { GeneroModule } from '../genero/genero.module';

@Module({
  imports: [TypeOrmModule.forFeature([Productos]), FormatoModule, GeneroModule],
  controllers: [ProductosController],
  providers: [ProductosService, FormatoService, GeneroService],
  exports: [TypeOrmModule],
})
export class ProductosModule {}
