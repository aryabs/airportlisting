import { NextPage } from 'next'
import Link from 'next/link'
import { useState } from 'react'

import Layout from '../components/layout'
import useSearchAirports from '../hooks/use-search-airports'
import VirtualizedGrid from '../components/virtualizedGrid'

const Page: NextPage = () => {
  const [query, setQuery] = useState('')
  const { airports, loading, error } = useSearchAirports(query)

  return (
    <Layout>
      <h1 className="text-2xl font-bold">Code Challenge: Airports</h1>

      <h2 className="mt-10 text-xl font-semibold">Search Airports</h2>

      <div className="mt-1 relative shadow-sm">
        <input
          type="text"
          name="query"
          id="query"
          className="focus:ring-blue-600 focus:border-blue-600 block w-full sm:text-sm border-gray-300 text-gray-800 rounded bg-gray-50 p-3"
          placeholder="Search by name, IATA, city, or country"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div className="mt-4">
        {loading && <p className="text-gray-500 mt-2">Searching...</p>}
        {!loading && !error && (
          <div className="mt-4 mb-4 inline-block px-4 py-1 bg-blue-50 text-blue-700 font-semibold text-sm rounded-full shadow-sm">
            Showing {airports.length} {airports.length === 1 ? 'Airport' : 'Airports'}
          </div>
        )}
        {error && <p className="text-red-500 mt-2">{error}</p>}

        {!loading && !error && airports.length === 0 && query.length > 0 && query.length < 2 && (
          <p className="mt-5 text-gray-500">Enter at least 2 characters to search.</p>
        )}

        {!loading && !error && airports.length === 0 && query.length >= 2 && (
          <p className="mt-5 text-gray-500">No airports found.</p>
        )}


        {!loading && !error && <VirtualizedGrid airports={airports} />}
      </div>
    </Layout>
  )
}

export default Page
