import { BookingInterface } from 'interfaces/booking';
import { CarLocationInterface } from 'interfaces/car-location';
import { GetQueryInterface } from 'interfaces';

export interface CarInterface {
  id?: string;
  make: string;
  model: string;
  year: number;
  color: string;
  license_plate: string;
  status: string;
  created_at?: any;
  updated_at?: any;
  booking?: BookingInterface[];
  car_location?: CarLocationInterface[];

  _count?: {
    booking?: number;
    car_location?: number;
  };
}

export interface CarGetQueryInterface extends GetQueryInterface {
  id?: string;
  make?: string;
  model?: string;
  color?: string;
  license_plate?: string;
  status?: string;
}
