import { Module } from '@nestjs/common';
import { SubgeneroService } from './subgenero.service';
import { SubgeneroController } from './subgenero.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subgenero } from './entities/subgenero.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Subgenero])],
  controllers: [SubgeneroController],
  providers: [SubgeneroService],
})
export class SubgeneroModule {}
