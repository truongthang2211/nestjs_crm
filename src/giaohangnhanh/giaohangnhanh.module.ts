import { Module } from '@nestjs/common';
import { GiaohangnhanhService } from './giaohangnhanh.service';
import { GiaohangnhanhController } from './giaohangnhanh.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [],
  controllers: [GiaohangnhanhController],
  providers: [GiaohangnhanhService],
})
export class GiaohangnhanhModule {}
