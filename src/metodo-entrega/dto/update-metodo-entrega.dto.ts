import { PartialType } from '@nestjs/mapped-types';
import { CreateMetodoEntregaDto } from './create-metodo-entrega.dto';

export class UpdateMetodoEntregaDto extends PartialType(CreateMetodoEntregaDto) {}
