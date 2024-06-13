import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstadosModule } from './estados/estados.module';
import { MunicipiosModule } from './municipios/municipios.module';
import { LocalidadesModule } from './localidades/localidades.module';
import { DireccionesModule } from './direcciones/direcciones.module';
import { ClientesModule } from './clientes/clientes.module';

@Module({
  imports: [EstadosModule, MunicipiosModule, LocalidadesModule, DireccionesModule, ClientesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
