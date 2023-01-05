export interface Address {
  tourism: string;
  road: string;
  suburb: string;
  city_district: string;
  city: string;
  'ISO3166-2-lvl4': string;
  postcode: string;
  country: string;
  country_code: string;
}

export interface MyLocation {
  place_id: number;
  licence: string;
  osm_type: string;
  osm_id: number;
  boundingbox: string[];
  lat: string;
  lon: string;
  display_name: string;
  class: string;
  type: string;
  importance: number;
  icon: string;
  address: Address;
}
