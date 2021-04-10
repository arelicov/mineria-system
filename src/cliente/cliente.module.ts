import { Module } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { ClienteController } from './cliente.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente } from './entities/cliente.entity';
import { MetodoPagoModule } from '../metodo-pago/metodo-pago.module';
import { MetodoPagoService } from '../metodo-pago/metodo-pago.service';

@Module({
  imports: [TypeOrmModule.forFeature([Cliente]), MetodoPagoModule],
  controllers: [ClienteController],
  providers: [ClienteService, MetodoPagoService],
})
export class ClienteModule {}
