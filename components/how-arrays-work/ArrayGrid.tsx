import FullBleed from '@/elements/FullBleed'
import type { Value } from '@/lib/memory'

import ArrayElement from './shared/ArrayElement'
import ArrayList from './shared/ArrayList'

const mapTypeToVariant = {
  string: 'string',
  boolean: 'boolean',
}

export default function ArrayGrid({ arr }: { arr: Value[] }) {
  return (
    <FullBleed size="full">
      <ArrayList>
        {arr.map((value, index) => (
          <ArrayElement key={index} type={mapTypeToVariant[typeof value]}>
            {String(value)}
          </ArrayElement>
        ))}
      </ArrayList>
    </FullBleed>
  )
}
