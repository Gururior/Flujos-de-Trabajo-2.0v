import { Module } from '@nestjs/common';
import { MunicipiosService } from './municipios.service';
import { MunicipiosController } from './municipios.controller';
import { PrismaService } from 'src/municipios/prisma.service';

@Module({
  controllers: [,MunicipiosController],
  providers: [MunicipiosService, PrismaService],
})
export class MunicipiosModule {}
