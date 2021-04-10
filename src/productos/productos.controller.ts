import {
  Controller,
  Get,
  Body,
  Param,
  Render,
  All,
  Req,
  Res,
} from '@nestjs/common';
import { ProductosService } from './productos.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { FormatoService } from '../formato/formato.service';
import { GeneroService } from '../genero/genero.service';

@Controller('productos')
export class ProductosController {
  constructor(
    private readonly productosService: ProductosService,
    private readonly formatoService: FormatoService,
    private readonly generoService: GeneroService,
  ) {}

  @Get()
  @Render('productos/index')
  async root() {
    return { productos: await this.productosService.findAll() };
  }

  @All('crear')
  @Render('productos/create')
  async create(@Req() req, @Res() res, @Body() producto: CreateProductoDto) {
    if (req.method === 'POST') {
      const savedProduct = await this.productosService.create(producto);
      return res.redirect(`/productos/${savedProduct.idArticulo}`);
    }

    return {
      formatos: await this.formatoService.findAll(),
      generos: await this.generoService.findAll(),
    };
  }

  @Get(':id')
  @Render('productos/detail')
  async findOne(@Param('id') id: string) {
    const producto = await this.productosService.findOne(+id);
    return { producto };
  }

  @Get('delete/:id')
  async remove(@Res() res, @Param('id') id: string) {
    await this.productosService.remove(+id);
    return res.redirect('/productos');
  }
}
