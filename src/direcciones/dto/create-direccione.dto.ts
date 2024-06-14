export class CreateDireccionDto {
    municipioId: number;
    localidadId: number;
    calle: string;
    numeroExt: string;
    numeroInt?: string;
}