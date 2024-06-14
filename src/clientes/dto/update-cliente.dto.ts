import { PartialType } from '@nestjs/mapped-types';
import { CreateClienteDto } from './create-cliente.dto';

export class UpdateClienteDto extends PartialType(CreateClienteDto) {
  nombre?: string;
  apellidos?: string;
  rfc?: string;
  email?: string;
  telefono?: string;
  estatus?: string;
  localidadId?: number;
  direccionId?: number;
}
