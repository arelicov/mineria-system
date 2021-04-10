import { Injectable } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Productos } from './entities/productos.entity';
import { Genero } from '../genero/entities/genero.entity';

@Injectable()
export class ProductosService {
  constructor(
    @InjectRepository(Productos)
    private productosRepository: Repository<Productos>,
  ) {}

  async create(createProductoDto: CreateProductoDto) {
    const producto = new Productos();
    producto['Año'] = +createProductoDto.aO;
    producto.titulo = createProductoDto.titulo;
    producto.artista = createProductoDto.artista;
    producto.sku = createProductoDto.sku;
    producto.pais = createProductoDto.pais;
    producto.idioma = createProductoDto.idioma;
    producto.idFormato = +createProductoDto.formato;
    producto.idGenero = +createProductoDto.genero;

    try {
      return await this.productosRepository.save(producto);
    } catch (e) {
      throw Error(e);
    }
  }

  findAll() {
    return this.productosRepository.find();
  }

  findOne(id: number) {
    return this.productosRepository.findOne({
      where: { idArticulo: id },
      relations: ['idGenero2', 'idFormato2'],
    });
  }

  async remove(id: number) {
    const producto = await this.productosRepository.findOne(id);
    await this.productosRepository.remove(producto);
  }
}
