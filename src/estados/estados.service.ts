import { Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { CreateEstadoDto } from './dto/create-estado.dto';
import { UpdateEstadoDto } from './dto/update-estado.dto';
import { PrismaService } from 'src/estados/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class EstadosService {
  
  constructor(private database: PrismaService){}
  async create(estadoData: Prisma.EstadoCreateInput) {
    return this.database.estado.create({
      data: estadoData
    })
  }
  
  findAll() {
    return this.database.estado.findMany();
  }

  async findOne(id: number) {
    const estado = await this.database.estado.findUnique({
      where: {
        id
      }
    });

    if(!estado){
      throw new NotFoundException('No se han encontrado ningun registro')
    }

    return estado;
  }

   async update(id: number, updateEstadoDto: UpdateEstadoDto) {
    return this.database.estado.update({
      data: { ...updateEstadoDto} as any,
      where: {
        id
      }
    });
  }

  async remove(id: number) {
    return this.database.estado.delete({
      where: {
        id,
      }
    });
  }
}
