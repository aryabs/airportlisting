import airports from '../data/airports.json'
import Airport from '../types/airport'

export const findAirportByIata = async (iata: string): Promise<Airport | undefined> => {
  return airports.find((airport) => airport.iata === iata.toUpperCase())
}

export const allAirports = async (): Promise<Airport[]> => {
  return airports
}


// 1.Cache the airports data since it's static
 const totalairports: Airport[] = airports

// 2.Pre-process data for more efficient searching
const searchIndex = totalairports.map(airport => ({
  iata: airport.iata.toLowerCase(),
  name: airport.name.toLowerCase(),
  city: airport.city.toLowerCase(),
  country: airport.country.toLowerCase(),
  original: airport
}))

export const searchAirports = async (
  query: string,
  page: number = 1,
  limit: number = 50
): Promise<Airport[]> => {
  if (!query.trim()) return []

  const queryLower = query.toLowerCase()

  //3. Simple substring matching (faster than regex for large datasets)
  const filteredAirports = searchIndex.filter(
    ({iata, name, city, country}) => 
      iata.includes(queryLower) ||
      name.includes(queryLower) ||
      city.includes(queryLower) ||
      country.includes(queryLower)
  ).map(item => item.original)

  // const startIndex = (page - 1) * limit
  // const endIndex = startIndex + limit
  return filteredAirports;
}