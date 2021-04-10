import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FormatoService } from './formato.service';
import { CreateFormatoDto } from './dto/create-formato.dto';
import { UpdateFormatoDto } from './dto/update-formato.dto';

@Controller('formato')
export class FormatoController {
  constructor(private readonly formatoService: FormatoService) {}

  @Post()
  create(@Body() createFormatoDto: CreateFormatoDto) {
    return this.formatoService.create(createFormatoDto);
  }

  @Get()
  findAll() {
    return this.formatoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.formatoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFormatoDto: UpdateFormatoDto) {
    return this.formatoService.update(+id, updateFormatoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.formatoService.remove(+id);
  }
}
