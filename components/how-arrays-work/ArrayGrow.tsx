import React from 'react'

import { styled } from '@/stitches'
import FullBleed from '@/elements/FullBleed'
import { getRandomInt } from '@/lib/utils'

import ArrayElement from './shared/ArrayElement'
import ArrayList from './shared/ArrayList'
import Button from './shared/Button'

type ArrayGrowProps = {
  initialArr: number[]
}

export default function ArrayGrow({ initialArr }: ArrayGrowProps) {
  const [arr, setArr] = React.useState(initialArr)
  return (
    <FullBleed size="full">
      <GrowArrayButton onClick={() => setArr([...arr, getRandomInt(1, 99)])}>
        Grow 📈
      </GrowArrayButton>
      <List>
        {arr.map((item, index) => (
          <ArrayElement key={index}>{item}</ArrayElement>
        ))}
      </List>
    </FullBleed>
  )
}

const GrowArrayButton = styled(Button, {
  margin: '0 auto',
})

const List = styled(ArrayList, {
  marginTop: '32px',
})
