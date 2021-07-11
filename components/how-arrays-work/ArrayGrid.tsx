import FullBleed from '@/elements/FullBleed'

import ArrayElement from './shared/ArrayElement'
import ArrayList from './shared/ArrayList'

export default function ArrayGrid({ arr }: { arr: number[] }) {
  return (
    <FullBleed size="full">
      <ArrayList>
        {arr.map((value, index) => (
          <ArrayElement key={index}>{value}</ArrayElement>
        ))}
      </ArrayList>
    </FullBleed>
  )
}
