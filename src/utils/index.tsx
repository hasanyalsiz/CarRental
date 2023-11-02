import { colors } from '../constants';
import { CarType, filterType } from '../types';

const options = {
  headers: {
    'X-RapidAPI-Key':
      'f93d2bdc20msh8e16de7b45efc07p19968djsn2ff706518bf5',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
  },
};

export async function fetchCars(filters: filterType) {
  const {
    make = 'bmw',
    model = '',
    limit = '5',
    year = '',
    fuel = '',
  } = filters;

  const res = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${make}&model=${model}&year=${year}&fuel_type=${fuel}&limit=${limit}`,
    options
  );

  return await res.json();
}

// fotoğraf url'i oluşturan bir method
export const generateImage = (car: CarType, angle?: string) => {
  const url = new URL('https://cdn.imagin.studio/getimage');

  url.searchParams.append('customer', 'hrjavascript-mastery');
  url.searchParams.append('make', car.make);
  url.searchParams.append('modelFamily', car.model.split('/')[0]);
  url.searchParams.append('zoomType', 'fullscreen');

  if (angle) {
    url.searchParams.append('angle', angle);
  }

  // rastgele renk kodu seç
  const i = Math.round(Math.random() * colors.length);
  url.searchParams.append('paintId', colors[i]);

  return String(url);
};
