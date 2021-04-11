import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Delete,
  All,
  Res,
} from '@nestjs/common';
import { FacturaService } from './factura.service';
import { UpdateFacturaDto } from './dto/update-factura.dto';

@Controller('factura')
export class FacturaController {
  constructor(private readonly facturaService: FacturaService) {}

  @All('create/:id')
  async create(@Res() res, @Param('id') ventaId: string) {
    const ventaExists = await this.facturaService.findCompra(+ventaId);
    if (ventaExists.idFactura) return res.redirect(`/compra/${ventaId}`);
    await this.facturaService.create(+ventaId);
    return res.redirect(`/compra/${ventaId}`);
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
