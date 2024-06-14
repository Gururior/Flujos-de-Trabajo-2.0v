import { PartialType } from '@nestjs/mapped-types';
import { CreateDireccionDto } from './create-direccione.dto';

export class UpdateDireccioneDto extends PartialType(CreateDireccionDto) {
    municipioId?: number;
    localidadId?: number;
    calle?: string;
    numeroExt?: string;
    numeroInt?: string;
}
