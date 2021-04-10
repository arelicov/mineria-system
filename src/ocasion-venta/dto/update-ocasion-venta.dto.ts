import { PartialType } from '@nestjs/mapped-types';
import { CreateOcasionVentaDto } from './create-ocasion-venta.dto';

export class UpdateOcasionVentaDto extends PartialType(CreateOcasionVentaDto) {}
