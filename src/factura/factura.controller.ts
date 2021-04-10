import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Delete,
  All,
} from '@nestjs/common';
import { FacturaService } from './factura.service';
import { UpdateFacturaDto } from './dto/update-factura.dto';

@Controller('factura')
export class FacturaController {
  constructor(private readonly facturaService: FacturaService) {}

  @All('create/:id')
  create(@Param('id') ventaId: string) {
    const factura = this.facturaService.create(+ventaId);

    return {
      ventaId,
      factura,
    };
  }

  @Get()
  findAll() {
    return this.facturaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.facturaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFacturaDto: UpdateFacturaDto) {
    return this.facturaService.update(+id, updateFacturaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.facturaService.remove(+id);
  }
}
