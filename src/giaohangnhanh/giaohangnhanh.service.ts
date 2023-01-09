import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { lastValueFrom } from 'rxjs';
import { Contact } from './dto/Contact';
import { Deal } from './dto/Deal';
import { MyLocation } from './dto/Location';
import { Product } from './dto/Product';
import { UpdateGiaohangnhanhDto } from './dto/update-giaohangnhanh.dto';

@Injectable()
export class GiaohangnhanhService {
  constructor(
    private readonly httpService: HttpService,
    private configService: ConfigService,
  ) {}
  BITRIX_URL = this.configService.get<string>('BITRIX_URL');

  async getDeal(DealID: number): Promise<Deal> {
    var config = {
      method: 'get',
      url: `${this.BITRIX_URL}/crm.deal.get.json?id=${DealID}`,
    };
    let dataRs: any = await lastValueFrom(this.httpService.request(config));
    console.log(dataRs.data.result);
    return dataRs.data.result;
  }
  async getInfOBuyer(contactID: number): Promise<Contact> {
    var config = {
      method: 'get',
      url: `${this.BITRIX_URL}/crm.contact.get.json?id=${contactID}`,
    };
    let dataRs: any = await lastValueFrom(this.httpService.request(config));
    return dataRs.data.result;
  }
  async getProductList(DealID: number): Promise<Product[]> {
    var config = {
      method: 'get',
      url: `${this.BITRIX_URL}/crm.deal.productrows.get.json?id=${DealID}`,
    };
    let dataRs: any = await lastValueFrom(this.httpService.request(config));
    return dataRs.data.result;
  }
  async getLocation(long: string, lat: string): Promise<MyLocation> {
    var config = {
      method: 'get',
      url: `https://nominatim.openstreetmap.org/search?q=${long},${lat}&format=json&polygon=1&addressdetails=1`,
    };
    let dataRs: any = await lastValueFrom(this.httpService.request(config));
    return dataRs.data[0];
  }
  async create(dealID: number) {
    try {
      let products = await this.getProductList(dealID);
      let deal = await this.getDeal(dealID);
      let contact = await this.getInfOBuyer(Number(deal.CONTACT_ID));
      let address: string[] =
        deal.UF_CRM_1673278519241.split('|')[1].split(';');
      let location = await this.getLocation(address[0], address[1]);
      var data = {
        to_name: contact.NAME,
        payment_type_id: 2,
        to_phone: contact.PHONE[0]?.VALUE,
        required_note: 'CHOXEMHANGKHONGTHU',
        to_address: `${location.address.tourism},${location.address.road}`,
        client_order_code: String(dealID),
        weight: 12,
        to_ward_name: location.address.suburb.trim(),
        cod_amount: products.reduce((a, b) => a + b.PRICE * b.QUANTITY, 0),
        to_district_name: location.address.city_district.trim(),
        to_province_name: location.address.city,
        length: 1,
        width: 19,
        height: 10,
        service_id: 53321,
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
      };
      console.log(data);
      var config = {
        method: 'post',
        url: 'https://dev-online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/create',
        headers: {
          'Content-Type': 'application/json',
          ShopId: '121254',
          Token: 'aaceecdc-85f7-11ed-8183-12cf3da973bf',
        },
        data: JSON.stringify(data),
      };
      let dataRs: any = await lastValueFrom(this.httpService.request(config));
      return dataRs.data;
    } catch (error) {
      console.log(error);
      return error.response?.data;
    }
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
