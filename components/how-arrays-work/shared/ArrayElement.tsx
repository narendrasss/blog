import { motion } from 'framer-motion'

import { styled } from '@/stitches'

const ArrayElement = styled(motion.li, {
  $$size: '4.5rem',
  $$border: '3px solid var(--color-dark)',
  $$radius: '8px',

  background: 'var(--color-main)',
  border: '$$border',
  borderRadius: '$$radius',
  color: 'white',
  fontFamily: 'var(--text-mono)',
  fontSize: '1.5rem',
  height: '$$size',
  width: '$$size',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  variants: {
    type: {
      light: {
        background: 'var(--color-light)',
        color: 'var(--color-dark)',
      },
    },
    shadow: {
      true: {
        $$offset: '2px',
        position: 'relative',

        '&:after': {
          content: '',
          position: 'absolute',
          height: '$$size',
          width: '$$size',
          border: '$$border',
          borderRadius: '$$radius',
          backgroundColor: 'white',
          top: '$$offset',
          left: '$$offset',
          zIndex: -1,
        },
      },
    },
  },
})

export default ArrayElement
