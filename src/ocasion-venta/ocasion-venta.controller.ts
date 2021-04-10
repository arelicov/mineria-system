import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OcasionVentaService } from './ocasion-venta.service';
import { CreateOcasionVentaDto } from './dto/create-ocasion-venta.dto';
import { UpdateOcasionVentaDto } from './dto/update-ocasion-venta.dto';

@Controller('ocasion-venta')
export class OcasionVentaController {
  constructor(private readonly ocasionVentaService: OcasionVentaService) {}

  @Post()
  create(@Body() createOcasionVentaDto: CreateOcasionVentaDto) {
    return this.ocasionVentaService.create(createOcasionVentaDto);
  }

  @Get()
  findAll() {
    return this.ocasionVentaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ocasionVentaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOcasionVentaDto: UpdateOcasionVentaDto) {
    return this.ocasionVentaService.update(+id, updateOcasionVentaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ocasionVentaService.remove(+id);
  }
}
