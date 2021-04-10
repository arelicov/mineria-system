import { Module } from '@nestjs/common';
import { OcasionVentaService } from './ocasion-venta.service';
import { OcasionVentaController } from './ocasion-venta.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {OcasionVenta} from "./entities/ocasion-venta.entity";

@Module({
  imports: [TypeOrmModule.forFeature([OcasionVenta])],
  controllers: [OcasionVentaController],
  providers: [OcasionVentaService]
})
export class OcasionVentaModule {}
