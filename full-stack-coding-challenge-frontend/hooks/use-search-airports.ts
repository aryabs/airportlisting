import { useEffect, useRef, useState } from 'react'
import Airport from '../types/airport'
import { useDebounce } from './use-debounce'

// 1	Debouncing input	- Reduce API call frequency
// 2	AbortController	- Aborts the previous fetch request before making a new one
// 3	Min query length check - Prevent junk API calls
// 4	Loading & error handling-	Better user feedback

const useSearchAirports = (query: string) => {
  const debouncedQuery = useDebounce(query, 300)
  const [airports, setAirports] = useState<Airport[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const controllerRef = useRef<AbortController | null>(null)

  useEffect(() => {
    const trimmedQuery = debouncedQuery.trim()
    if (trimmedQuery.length > 0 && trimmedQuery.length < 2) {
        setAirports([])
        setLoading(false)
        return
      }

    setLoading(true)
    setError(null)

    controllerRef.current?.abort()
    const controller = new AbortController()
    controllerRef.current = controller

    const url =
      trimmedQuery.length === 0
        ? '/api/airports'
        : `/api/airports/${trimmedQuery}`

    fetch(url, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch airports')
        return res.json()
      })
      .then((data: Airport[]) => {
        setAirports(data)
      })
      .catch((err) => {
        if (err.name !== 'AbortError') {
          console.error(err)
          setError('Something went wrong')
        }
      })
      .finally(() => setLoading(false))

    return () => controller.abort()
  }, [debouncedQuery])

  return { airports, loading, error }
}

export default useSearchAirports
