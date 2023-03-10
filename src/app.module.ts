import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GiaohangnhanhController } from './giaohangnhanh/giaohangnhanh.controller';
import { GiaohangnhanhService } from './giaohangnhanh/giaohangnhanh.service';

@Module({
  imports: [HttpModule, ConfigModule.forRoot()],
  controllers: [AppController, GiaohangnhanhController],
  providers: [AppService, GiaohangnhanhService],
})
export class AppModule {}
