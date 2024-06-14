export class CreateClienteDto {
    nombre: string;
    apellidos: string;
    rfc: string;
    email: string;
    telefono: string;
    estatus?: string;
    localidadId: number;
    direccionId: number;
}