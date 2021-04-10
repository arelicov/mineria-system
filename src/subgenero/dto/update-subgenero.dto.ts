import { PartialType } from '@nestjs/mapped-types';
import { CreateSubgeneroDto } from './create-subgenero.dto';

export class UpdateSubgeneroDto extends PartialType(CreateSubgeneroDto) {}
