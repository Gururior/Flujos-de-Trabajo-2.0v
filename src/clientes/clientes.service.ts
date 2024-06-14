import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { PrismaService } from './prisma.service';
import { Cliente, Prisma } from '@prisma/client';

@Injectable()
export class ClientesService {
  constructor(private database: PrismaService) {}

  async create(clienteData: Prisma.ClienteCreateInput): Promise<Cliente> {
    return this.database.cliente.create({
      data: clienteData,
      include: { direccion: true }
    });
  }

  findAll(): Promise<Cliente[]> {
    return this.database.cliente.findMany({
      include: { direccion: true }
    });
  }

  async findOne(id: number): Promise<Cliente> {
    return this.database.cliente.findUnique({
      where: { id },
      include: { direccion: true }
    }).then(cliente => {
      if (!cliente) {
        throw new NotFoundException('No se ha encontrado ningún registro');
      }
      return cliente;
    });
  }

  async update(id: number, updateClienteDto: Prisma.ClienteUpdateInput): Promise<Cliente> {
    return this.database.cliente.update({
      data: updateClienteDto,
      where: { id },
      include: { direccion: true }
    });
  }

  async remove(id: number): Promise<Cliente> {
    return this.database.cliente.delete({
      where: { id },
      include: { direccion: true }
    });
  }
}
