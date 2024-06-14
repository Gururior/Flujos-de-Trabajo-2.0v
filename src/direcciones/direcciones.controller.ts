import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { DireccionesService } from './direcciones.service';
import { CreateDireccionDto } from './dto/create-direccione.dto';
import { UpdateDireccioneDto } from './dto/update-direccione.dto';

@Controller('direcciones')
export class DireccionesController {
  constructor(private readonly DireccionesService: DireccionesService) {}

  @Post()
  create(@Body() createClienteDto: CreateDireccionDto) {
    return this.DireccionesService.create(createClienteDto as any);
  }

  @Get()
  findAll() {
    return this.DireccionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.DireccionesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() UpdateDireccioneDto: UpdateDireccioneDto) {
    return this.DireccionesService.update(id, UpdateDireccioneDto as any);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.DireccionesService.remove(id);
  }
}
