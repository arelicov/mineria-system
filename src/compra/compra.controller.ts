import {
  Controller,
  Get,
  Param,
  Delete,
  Render,
  All,
  Body,
  Req,
  Res,
} from '@nestjs/common';
import { CompraService } from './compra.service';
import { CreateCompraDto } from './dto/create-compra.dto';
import { TrabajadoresService } from '../trabajadores/trabajadores.service';
import { ProductosService } from '../productos/productos.service';
import { MetodoPagoService } from '../metodo-pago/metodo-pago.service';
import { OcasionVentaService } from '../ocasion-venta/ocasion-venta.service';
import { MetodoEntregaService } from '../metodo-entrega/metodo-entrega.service';
import { ClienteService } from '../cliente/cliente.service';

@Controller('compra')
export class CompraController {
  constructor(
    private readonly compraService: CompraService,
    private readonly clienteService: ClienteService,
    private readonly trabajadoresService: TrabajadoresService,
    private readonly productosService: ProductosService,
    private readonly metodoPagoService: MetodoPagoService,
    private readonly ocasionVentaService: OcasionVentaService,
    private readonly metodoEntregaService: MetodoEntregaService,
  ) {}

  @Get()
  @Render('compra/index')
  async index() {
    return { compras: await this.compraService.findAll() };
  }

  @All('crear')
  @Render('compra/create')
  async create(
    @Req() req,
    @Res() res,
    @Body() createCompraDto: CreateCompraDto,
  ) {
    if (req.method === 'POST') {
      const savedCompra = await this.compraService.create(createCompraDto);
      console.log(savedCompra);
      return res.redirect(`/compra/${savedCompra.idCompra}`);
    }

    return {
      clientes: await this.clienteService.findAll(),
      trabajadores: await this.trabajadoresService.findAll(),
      productos: await this.productosService.findAll(),
      metodoPagos: await this.metodoPagoService.findAll(),
      ocasiones: await this.ocasionVentaService.findAll(),
      metodoEntregas: await this.metodoEntregaService.findAll(),
    };
  }

  @Get(':id')
  @Render('compra/detail')
  async findOne(@Param('id') id: string) {
    const compra = await this.compraService.findOne(+id);
    console.log(compra);
    return { compra };
  }

  @Get('delete/:id')
  async remove(@Res() res, @Param('id') id: string) {
    await this.compraService.remove(+id);
    return res.redirect('/compra');
  }
}
