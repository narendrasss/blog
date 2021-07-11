import React from 'react'
import { FaLongArrowAltDown } from 'react-icons/fa'
import { motion } from 'framer-motion'

import { styled } from '@/stitches'
import FullBleed from '@/elements/FullBleed'
import { getRandomInt } from '@/lib/utils'

import ArrayElement from './shared/ArrayElement'
import ArrayList from './shared/ArrayList'
import Button from './shared/Button'

type ArrayLookupProps = {
  arr: number[]
  activeIndex: number
}

export default function ArrayLookup({ arr, activeIndex }: ArrayLookupProps) {
  const [currentIndex, setCurrentIndex] = React.useState(activeIndex)
  return (
    <FullBleed size="full">
      <RandomIndexButton
        onClick={() => setCurrentIndex(getRandomInt(0, arr.length - 1))}
      >
        Index: {currentIndex}
      </RandomIndexButton>
      <List>
        {arr.map((item, index) => {
          const isActive = currentIndex === index
          return (
            <ElementWrapper key={index}>
              {isActive ? <Pointer /> : null}
              <ArrayElement
                type={isActive ? 'light' : undefined}
                layout="position"
              >
                {item}
              </ArrayElement>
              <Index layout="position">{index}</Index>
            </ElementWrapper>
          )
        })}
      </List>
    </FullBleed>
  )
}

const RandomIndexButton = styled(Button, {
  margin: '0 auto',
})

const List = styled(ArrayList, {
  marginTop: '32px',
})

const Index = styled(motion.p, {
  textAlign: 'center',
  marginTop: '4px',
})

const ElementWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

// --

function Pointer(props: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <Highlight {...props}>
      <FaLongArrowAltDown />
    </Highlight>
  )
}

const Highlight = styled('div', {
  color: 'var(--color-dark)',
  textAlign: 'center',
  marginBottom: '4px',
  fontSize: '1.5rem',
})
