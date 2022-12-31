import { HttpService } from '@nestjs/axios';
import { Injectable, UsePipes, ValidationPipe } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { Contact } from './dto/Contact';
import { CreateGiaohangnhanhDto } from './dto/create-giaohangnhanh.dto';
import { Deal } from './dto/Deal';
import { Product } from './dto/Product';
import { UpdateGiaohangnhanhDto } from './dto/update-giaohangnhanh.dto';

@Injectable()
export class GiaohangnhanhService {
  constructor(private readonly httpService: HttpService) {}
  async getDeal(DealID: number): Promise<Deal> {
    var config = {
      method: 'get',
      url: `https://b24-aypxm5.bitrix24.vn/rest/1/0tinjuv7qbs1si9g/crm.deal.get.json?id=${DealID}`,
    };
    let dataRs: any = await lastValueFrom(
      this.httpService.request(config),
    ).catch((e) => console.log(e));
    return dataRs.data.result;
  }
  async getInfOBuyer(contactID: number): Promise<Contact> {
    var config = {
      method: 'get',
      url: `https://b24-aypxm5.bitrix24.vn/rest/1/x6a2dlkxklx8n3np/crm.contact.get.json?id=${contactID}`,
    };
    let dataRs: any = await lastValueFrom(
      this.httpService.request(config),
    ).catch((e) => console.log(e));
    console.log(dataRs.data);
    return dataRs.data.result;
  }
  async getProductList(DealID: number): Promise<Product[]> {
    var config = {
      method: 'get',
      url: `https://b24-aypxm5.bitrix24.vn/rest/1/uehey2x4vjrxcz4g/crm.deal.productrows.get.json?id=${DealID}`,
    };
    let dataRs: any = await lastValueFrom(
      this.httpService.request(config),
    ).catch((e) => console.log(e));
    return dataRs.data.result;
  }
  async create(dealID: number) {
    let products = await this.getProductList(dealID);
    let deal = await this.getDeal(dealID);
    let contact = await this.getInfOBuyer(Number(deal.CONTACT_ID));
    var data = JSON.stringify({
      to_name: contact.NAME,
      payment_type_id: 2,
      to_phone: contact.PHONE[0]?.VALUE,
      required_note: 'CHOXEMHANGKHONGTHU',
      to_address: contact.ADDRESS ?? 'Đường Hàn Thuyên',
      client_order_code: String(dealID),
      weight: 12,
      to_ward_name: contact.ADDRESS_PROVINCE ?? 'Linh Trung',
      cod_amount: 200000,
      to_district_name: contact.ADDRESS_REGION ?? 'Thủ Đức',
      to_province_name: contact.ADDRESS_CITY ?? 'TP Hồ Chí Minh',
      length: 1,
      width: 19,
      height: 10,
      service_id: 53320,
      items: products.map((p) => {
        return {
          name: p.PRODUCT_NAME,
          code: String(p.PRODUCT_ID),
          quantity: p.QUANTITY,
          price: p.PRICE,
          length: 12,
          width: 12,
          height: 12,
        };
      }),
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
