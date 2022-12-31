import { UsePipes, ValidationPipe } from '@nestjs/common';
import { IsNumber } from 'class-validator';
import { IsNumberString } from 'class-validator';

export class CreateGiaohangnhanhDto {
  payment_type_id: number;
  note: string;
  required_note: string;
  client_order_code: string;
  to_name: string;
  to_phone: string;
  to_address: string;
  to_ward_name: string;
  to_district_name: string;
  to_province_name: string;
  cod_amount: number;
  content: string;
  weight: number;
  length: number;
  width: number;
  height: number;
  service_id: number;
  items: Product[];
}
export interface Product {
  name: string;
  code: string;
  quantity: number;
  price: number;
  length: number;
  width: number;
  height: number;
}
