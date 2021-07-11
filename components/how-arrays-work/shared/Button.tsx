import { motion } from 'framer-motion'

import { styled } from '@/stitches'

export default function Button({ onClick, children, ...delegated }) {
  return (
    <ButtonWrapper {...delegated}>
      <ButtonTrigger onClick={onClick} whileTap={{ x: 4, y: 4 }}>
        {children}
      </ButtonTrigger>
      <ButtonShadow />
    </ButtonWrapper>
  )
}

const ButtonWrapper = styled('div', {
  position: 'relative',
  width: 'fit-content',
  zIndex: 0,
})

const ButtonTrigger = styled(motion.button, {
  position: 'relative',
  border: '3px solid var(--color-dark)',
  background: 'var(--color-light)',
  color: 'var(--color-dark)',
  fontFamily: 'var(--text-mono)',
  fontWeight: 500,
  zIndex: 10,
  padding: '8px 12px',
  borderRadius: '8px',

  ':focus': {
    outline: 'none',
  },
})

const ButtonShadow = styled('div', {
  position: 'absolute',
  border: '3px solid var(--color-dark)',
  width: '100%',
  height: '100%',
  background: 'white',
  top: '6px',
  left: '6px',
  zIndex: 0,
  borderRadius: '8px',
})
