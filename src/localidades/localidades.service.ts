import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/localidades/prisma.service';
import { Prisma, Localidad } from '@prisma/client';

@Injectable()
export class LocalidadesService {
  constructor(private database: PrismaService) {}

   async create(localidadData: Prisma.LocalidadCreateInput): Promise<Localidad> {
    return this.database.localidad.create({
      data: localidadData,
      include: { direcciones: true, municipio: true }
    });
  }

  findAll(): Promise<Localidad[]> {
    return this.database.localidad.findMany({
      include: { direcciones: true, municipio: true }
    });
  }

  async findOne(id: number): Promise<Localidad> {
    return this.database.localidad.findUnique({
      where: { id },
      include: { direcciones: true, municipio: true }
    }).then(localidad => {
      if (!localidad) {
        throw new NotFoundException('No se ha encontrado ningún registro');
      }
      return localidad;
    });
  }

  async update(id: number, updateLocalidadDto: Prisma.LocalidadUpdateInput): Promise<Localidad> {
    return this.database.localidad.update({
      data: updateLocalidadDto,
      where: { id },
      include: { direcciones: true, municipio: true }
    });
  }

  async remove(id: number): Promise<Localidad> {
    return this.database.localidad.delete({
      where: { id },
      include: { direcciones: true, municipio: true }
    });
  }
}

