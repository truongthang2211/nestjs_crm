import { HttpService } from '@nestjs/axios';
import { Injectable, UsePipes, ValidationPipe } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { CreateGiaohangnhanhDto } from './dto/create-giaohangnhanh.dto';
import { UpdateGiaohangnhanhDto } from './dto/update-giaohangnhanh.dto';

@Injectable()
export class GiaohangnhanhService {
  constructor(private readonly httpService: HttpService) {}

  async create(createGiaohangnhanhDto: string) {
    var data = JSON.stringify({
      to_name: 'Thang',
      payment_type_id: 2,
      to_phone: '0909998877',
      note: 'Tintest 123',
      required_note: 'CHOXEMHANGKHONGTHU',
      to_address: 'Streaming house',
      client_order_code: '1',
      weight: 12,
      to_ward_name: 'Phường 15',
      cod_amount: 200000,
      to_district_name: 'Quận 10',
      content: 'Theo New York Times',
      to_province_name: 'TP Hồ Chí Minh',
      length: 1,
      width: 19,
      height: 10,
      service_id: 53320,
      items: [
        {
          name: 'Áo Polo',
          code: 'Polo123',
          quantity: 1,
          price: 200000,
          length: 12,
          width: 12,
          height: 12,
        },
      ],
    });
    console.log(data);

    var config = {
      method: 'post',
      url: 'https://dev-online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/create',
      headers: {
        'Content-Type': 'application/json',
        ShopId: '121254',
        Token: 'aaceecdc-85f7-11ed-8183-12cf3da973bf',
      },
      data: data,
    };
    let dataRs: any = await lastValueFrom(
      this.httpService.request(config),
    ).catch((e) => console.log(e));
    return dataRs.data;
  }

  findAll() {
    return `This action returns all giaohangnhanh`;
  }

  findOne(id: number) {
    return `This action returns a #${id} giaohangnhanh`;
  }

  update(id: number, updateGiaohangnhanhDto: UpdateGiaohangnhanhDto) {
    return `This action updates a #${id} giaohangnhanh`;
  }

  remove(id: number) {
    return `This action removes a #${id} giaohangnhanh`;
  }
}
