import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/municipios/prisma.service';
import { Municipio, Prisma } from '@prisma/client';

@Injectable()
export class MunicipiosService {
  constructor(private database: PrismaService) {}

  async create(municipioData: Prisma.MunicipioCreateInput): Promise<Municipio> {
    return this.database.municipio.create({
      data: municipioData,
      include: { localidades: true }
    });
  }

  findAll(): Promise<Municipio[]> {
    return this.database.municipio.findMany({
      include: { localidades: true }
    });
  }

  async findOne(id: number): Promise<Municipio> {
    return this.database.municipio.findUnique({
      where: { id },
      include: { localidades: true }
    }).then(municipio => {
      if (!municipio) {
        throw new NotFoundException('No se ha encontrado ningún registro');
      }
      return municipio;
    });
  }

  async update(id: number, updateMunicipioDto: Prisma.MunicipioUpdateInput): Promise<Municipio> {
    return this.database.municipio.update({
      data: updateMunicipioDto,
      where: { id },
      include: { localidades: true }
    });
  }

  async remove(id: number): Promise<Municipio> {
    return this.database.municipio.delete({
      where: { id },
      include: { localidades: true }
    });
  }
}