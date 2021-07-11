import { styled } from '@/stitches'

export default function FullBleed({ size, children }) {
  const className = size === 'full' ? 'full-width' : ''
  return <Figure className={className}>{children}</Figure>
}

const Figure = styled('figure', {
  padding: '0 var(--horizontal-padding, 32px)',
})
