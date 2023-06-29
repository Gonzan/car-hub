import { fetchUrl } from "../constants";

export async function getAllCars() {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'a2078eb500msh06b282053fb5c88p1871ffjsn02ca86cc1c45',
      'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
  };
  let data = null;
  let error = false;
  const allCarsUrl = fetchUrl.allCars;
  try {
    const result = await fetch(allCarsUrl(),options);
   
    if (!result.ok) {
      throw new Error('Error en la solicitud');
    }

    data = await result.json();
  }
  catch (error) {
    error = true;
  }
    return { data, error }
}