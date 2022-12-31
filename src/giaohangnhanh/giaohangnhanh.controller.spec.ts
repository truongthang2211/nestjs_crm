import { Test, TestingModule } from '@nestjs/testing';
import { GiaohangnhanhController } from './giaohangnhanh.controller';
import { GiaohangnhanhService } from './giaohangnhanh.service';

describe('GiaohangnhanhController', () => {
  let controller: GiaohangnhanhController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GiaohangnhanhController],
      providers: [GiaohangnhanhService],
    }).compile();

    controller = module.get<GiaohangnhanhController>(GiaohangnhanhController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
