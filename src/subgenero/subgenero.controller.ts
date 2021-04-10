import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SubgeneroService } from './subgenero.service';
import { CreateSubgeneroDto } from './dto/create-subgenero.dto';
import { UpdateSubgeneroDto } from './dto/update-subgenero.dto';

@Controller('subgenero')
export class SubgeneroController {
  constructor(private readonly subgeneroService: SubgeneroService) {}

  @Post()
  create(@Body() createSubgeneroDto: CreateSubgeneroDto) {
    return this.subgeneroService.create(createSubgeneroDto);
  }

  @Get()
  findAll() {
    return this.subgeneroService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subgeneroService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSubgeneroDto: UpdateSubgeneroDto,
  ) {
    return this.subgeneroService.update(+id, updateSubgeneroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subgeneroService.remove(+id);
  }
}
