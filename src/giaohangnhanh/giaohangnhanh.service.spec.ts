import { Test, TestingModule } from '@nestjs/testing';
import { GiaohangnhanhService } from './giaohangnhanh.service';

describe('GiaohangnhanhService', () => {
  let service: GiaohangnhanhService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GiaohangnhanhService],
    }).compile();

    service = module.get<GiaohangnhanhService>(GiaohangnhanhService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
