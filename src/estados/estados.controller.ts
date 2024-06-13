import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { EstadosService } from './estados.service';
import { CreateEstadoDto } from './dto/create-estado.dto';
import { UpdateEstadoDto } from './dto/update-estado.dto';

@Controller('estados')
export class EstadosController {
  constructor(private readonly estadosService: EstadosService) {}

  @Post()
  create(@Body() createEstadoDto: CreateEstadoDto) {
    return this.estadosService.create(createEstadoDto as any);
  }

  @Get()
  findAll() {
    return this.estadosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.estadosService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateEstadoDto: UpdateEstadoDto) {
    return this.estadosService.update(id, updateEstadoDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.estadosService.remove(id);
  }
}
