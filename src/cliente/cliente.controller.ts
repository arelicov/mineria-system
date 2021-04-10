import {
  Controller,
  Get,
  Body,
  Param,
  Delete,
  Render,
  All,
  Req,
  Res,
} from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { MetodoPagoService } from '../metodo-pago/metodo-pago.service';
import { CreateClienteDto } from './dto/create-cliente.dto';

@Controller('cliente')
export class ClienteController {
  constructor(
    private readonly clienteService: ClienteService,
    private readonly metodoPagoService: MetodoPagoService,
  ) {}

  @Get()
  @Render('cliente/index')
  async index() {
    return { clientes: await this.clienteService.findAll() };
  }

  @All('crear')
  @Render('cliente/create')
  async create(
    @Req() req,
    @Res() res,
    @Body() createClienteDto: CreateClienteDto,
  ) {
    if (req.method === 'POST') {
      const savedClient = await this.clienteService.create(createClienteDto);
      return res.redirect(`/cliente/${savedClient.idCliente}`);
    }

    return {
      metodoPagos: await this.metodoPagoService.findAll(),
    };
  }

  @Get(':id')
  @Render('cliente/detail')
  async findOne(@Param('id') id: string) {
    const cliente = await this.clienteService.findOne(+id);
    console.log(cliente);
    return { cliente };
  }

  @Get('delete/:id')
  async remove(@Res() res, @Param('id') id: string) {
    await this.clienteService.remove(+id);
    return res.redirect('/cliente');
  }
}
