import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/direcciones/prisma.service';
import { Prisma, Direccion } from '@prisma/client';

@Injectable()
export class DireccionesService {
  constructor(private database: PrismaService) {}

  async create(direccionData: Prisma.DireccionCreateInput): Promise<Direccion> {
    return this.database.direccion.create({
      data: direccionData,
      include: { clientes: true, localidad: true }
    });
  }

  findAll(): Promise<Direccion[]> {
    return this.database.direccion.findMany({
      include: { clientes: true, localidad: true }
    });
  }

  async findOne(id: number): Promise<Direccion> {
    return this.database.direccion.findUnique({
      where: { id },
      include: { clientes: true, localidad: true }
    }).then(direccion => {
      if (!direccion) {
        throw new NotFoundException('No se ha encontrado ningún registro');
      }
      return direccion;
    });
  }

  async update(id: number, updateDireccionDto: Prisma.DireccionUpdateInput): Promise<Direccion> {
    return this.database.direccion.update({
      data: updateDireccionDto,
      where: { id },
      include: { clientes: true, localidad: true }
    });
  }

  async remove(id: number): Promise<Direccion> {
    return this.database.direccion.delete({
      where: { id },
      include: { clientes: true, localidad: true }
    });
  }
}