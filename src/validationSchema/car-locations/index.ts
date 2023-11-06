import * as yup from 'yup';

export const carLocationValidationSchema = yup.object().shape({
  arrival_time: yup.date().required(),
  departure_time: yup.date().nullable(),
  status: yup.string().required(),
  car_id: yup.string().nullable().required(),
  location_id: yup.string().nullable().required(),
});
