

import { CarProps, FilterProps } from '@/types';
import axios from 'axios';
import https from 'https';


export async function fetchCars(filters:FilterProps) {
  const {manufacturer, year, model, limit, fuel}= filters
  const url= `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`

   
   const  headers = {
      'X-RapidAPI-Key': '955b7cb9dcmsh04c7518748a7c4ap18a944jsn117dadafdd31',
      'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
 
  const instance = axios.create({
    httpsAgent: new https.Agent({
      rejectUnauthorized: false,
    }),
    headers:headers
  });

  try {
    const response = await instance.get(url);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
 

}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (car:CarProps, angle?:string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const {make, year,model} = car
  url.searchParams.append("customer", 'hrjavascript-mastery')
  url.searchParams.append("modelFamily", model.split(" ")[0])
  url.searchParams.append("zoomType", "fullscreen")
  url.searchParams.append("modelYear", `${year}`)
  url.searchParams.append("angle", `${angle}`)
 
  return `${url}`
}



export const updateSearchParams = (type:string, value:string)=>{
  const searchParams = new URLSearchParams(window.location.search)
  
  searchParams.set(type, value)

  const newPathname = `${window.location.pathname}?${searchParams.toString()}`
  return newPathname
}

