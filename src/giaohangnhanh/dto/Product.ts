export interface Product {
  ID: string;
  OWNER_ID: string;
  OWNER_TYPE: string;
  PRODUCT_ID: number;
  PRODUCT_NAME: string;
  ORIGINAL_PRODUCT_NAME: string;
  PRODUCT_DESCRIPTION?: any;
  PRICE: number;
  PRICE_EXCLUSIVE: number;
  PRICE_NETTO: number;
  PRICE_BRUTTO: number;
  PRICE_ACCOUNT: string;
  QUANTITY: number;
  DISCOUNT_TYPE_ID: number;
  DISCOUNT_RATE: number;
  DISCOUNT_SUM: number;
  TAX_RATE?: any;
  TAX_INCLUDED: string;
  CUSTOMIZED: string;
  MEASURE_CODE: number;
  MEASURE_NAME: string;
  SORT: number;
  XML_ID?: any;
  TYPE: number;
  RESERVE_ID?: any;
  RESERVE_QUANTITY: number;
}
