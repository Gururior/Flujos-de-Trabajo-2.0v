import { PartialType } from '@nestjs/mapped-types';
import { CreateLocalidadDto } from './create-localidade.dto';

export class UpdateLocalidadeDto extends PartialType(CreateLocalidadDto) {
    nombre?: string;
    poblacion?: number;
    cp?: string;
    municipioId?: number;
    
}

