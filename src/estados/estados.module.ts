import { Module } from '@nestjs/common';
import { EstadosService } from './estados.service';
import { EstadosController } from './estados.controller';
import { PrismaService } from 'src/estados/prisma.service';

@Module({
  controllers: [EstadosController],
  providers: [EstadosService, PrismaService],
})
export class EstadosModule {}