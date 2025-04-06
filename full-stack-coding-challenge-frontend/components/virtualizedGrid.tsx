import { FixedSizeGrid as Grid } from 'react-window'
import AutoSizer from 'react-virtualized-auto-sizer'
import Link from 'next/link'
import Airport from '../types/airport'

type Props = {
  airports: Airport[]
}

const CARD_HEIGHT = 80

const VirtualizedGrid = ({ airports }: Props) => {
  return (
    <div className="h-[80vh]">
      <AutoSizer>
        {({ height, width }) => {
          const columnCount = width < 640 ? 1 : width < 1024 ? 2 : 4
          const columnWidth = width / columnCount
          const rowCount = Math.ceil(airports.length / columnCount)

          return (
            <Grid
              columnCount={columnCount}
              columnWidth={columnWidth}
              height={height}
              rowCount={rowCount}
              rowHeight={CARD_HEIGHT}
              width={width}
            >
              {({ columnIndex, rowIndex, style }) => {
                const index = rowIndex * columnCount + columnIndex
                const airport = airports[index]
                if (!airport) return null

                return (
                  <div style={style} className="p-1">
                    <Link
                      href={`/airports/${airport.iata.toLowerCase()}`}
                      className="block h-full w-full border border-gray-200 rounded-md p-2 hover:border-blue-500 focus:border-blue-500 bg-white transition text-sm sm:text-base"
                    >
                      <div className="font-medium truncate">
                        {airport.name}, {airport.city}
                      </div>
                      <div className="text-gray-500 text-xs truncate">{airport.country}</div>
                    </Link>
                  </div>
                )
              }}
            </Grid>
          )
        }}
      </AutoSizer>
    </div>
  )
}

export default VirtualizedGrid
