import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MetodoEntregaService } from './metodo-entrega.service';
import { CreateMetodoEntregaDto } from './dto/create-metodo-entrega.dto';
import { UpdateMetodoEntregaDto } from './dto/update-metodo-entrega.dto';

@Controller('metodo-entrega')
export class MetodoEntregaController {
  constructor(private readonly metodoEntregaService: MetodoEntregaService) {}

  @Post()
  create(@Body() createMetodoEntregaDto: CreateMetodoEntregaDto) {
    return this.metodoEntregaService.create(createMetodoEntregaDto);
  }

  @Get()
  findAll() {
    return this.metodoEntregaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.metodoEntregaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMetodoEntregaDto: UpdateMetodoEntregaDto) {
    return this.metodoEntregaService.update(+id, updateMetodoEntregaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.metodoEntregaService.remove(+id);
  }
}
