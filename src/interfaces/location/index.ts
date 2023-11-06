import { CarLocationInterface } from 'interfaces/car-location';
import { GetQueryInterface } from 'interfaces';

export interface LocationInterface {
  id?: string;
  latitude: number;
  longitude: number;
  address: string;
  city: string;
  state: string;
  zip_code: string;
  created_at?: any;
  updated_at?: any;
  car_location?: CarLocationInterface[];

  _count?: {
    car_location?: number;
  };
}

export interface LocationGetQueryInterface extends GetQueryInterface {
  id?: string;
  address?: string;
  city?: string;
  state?: string;
  zip_code?: string;
}
