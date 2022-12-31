export interface PHONE {
  ID: string;
  VALUE_TYPE: string;
  VALUE: string;
  TYPE_ID: string;
}

export interface Contact {
  ID: string;
  POST: string;
  COMMENTS?: any;
  HONORIFIC: string;
  NAME: string;
  SECOND_NAME: string;
  LAST_NAME: string;
  PHOTO?: any;
  LEAD_ID?: any;
  TYPE_ID?: any;
  SOURCE_ID?: any;
  SOURCE_DESCRIPTION?: any;
  COMPANY_ID?: any;
  BIRTHDATE: string;
  EXPORT: string;
  HAS_PHONE: string;
  HAS_EMAIL: string;
  HAS_IMOL: string;
  DATE_CREATE: Date;
  DATE_MODIFY: Date;
  ASSIGNED_BY_ID: string;
  CREATED_BY_ID: string;
  MODIFY_BY_ID: string;
  OPENED: string;
  ORIGINATOR_ID?: any;
  ORIGIN_ID?: any;
  ORIGIN_VERSION?: any;
  FACE_ID?: any;
  ADDRESS?: any;
  ADDRESS_2?: any;
  ADDRESS_CITY?: any;
  ADDRESS_POSTAL_CODE?: any;
  ADDRESS_REGION?: any;
  ADDRESS_PROVINCE?: any;
  ADDRESS_COUNTRY?: any;
  ADDRESS_LOC_ADDR_ID?: any;
  UTM_SOURCE?: any;
  UTM_MEDIUM?: any;
  UTM_CAMPAIGN?: any;
  UTM_CONTENT?: any;
  UTM_TERM?: any;
  PHONE: PHONE[];
}
