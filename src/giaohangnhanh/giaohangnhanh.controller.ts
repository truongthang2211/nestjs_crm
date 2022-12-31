import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Delete,
  ValidationPipe,
} from '@nestjs/common';
import { GiaohangnhanhService } from './giaohangnhanh.service';
import { CreateGiaohangnhanhDto } from './dto/create-giaohangnhanh.dto';
import { UpdateGiaohangnhanhDto } from './dto/update-giaohangnhanh.dto';
import { Query, UsePipes } from '@nestjs/common/decorators';

@Controller('giaohangnhanh')
export class GiaohangnhanhController {
  constructor(private readonly giaohangnhanhService: GiaohangnhanhService) {}

  @Get('shipmentCreate/:data')
  async create(@Param('data') createobject: string) {
    return await this.giaohangnhanhService.create(createobject);
  }

  @Get()
  findAll() {
    return this.giaohangnhanhService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.giaohangnhanhService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateGiaohangnhanhDto: UpdateGiaohangnhanhDto,
  ) {
    return this.giaohangnhanhService.update(+id, updateGiaohangnhanhDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.giaohangnhanhService.remove(+id);
  }
}
