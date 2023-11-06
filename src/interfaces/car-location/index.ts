import { CarInterface } from 'interfaces/car';
import { LocationInterface } from 'interfaces/location';
import { GetQueryInterface } from 'interfaces';

export interface CarLocationInterface {
  id?: string;
  car_id: string;
  location_id: string;
  arrival_time: any;
  departure_time?: any;
  status: string;
  created_at?: any;
  updated_at?: any;

  car?: CarInterface;
  location?: LocationInterface;
  _count?: {};
}

export interface CarLocationGetQueryInterface extends GetQueryInterface {
  id?: string;
  car_id?: string;
  location_id?: string;
  status?: string;
}
