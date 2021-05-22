import { AnimatePresence, motion } from 'framer-motion'
import { styled } from 'twin.macro'

const animationProps = {
  animate: { y: 0, opacity: 1 },
  initial: { y: 8, opacity: 0 },
}

export default function CallStack({ className, stack }) {
  if (!stack.length) {
    return (
      <Stack className={className}>
        <motion.p {...animationProps}>Nothing to see here!</motion.p>
      </Stack>
    )
  }

  return (
    <Stack className={className}>
      <AnimatePresence>
        {stack.map((frame) => (
          <motion.li exit={{ y: 8, opacity: 0 }} key={frame.name}>
            <FrameTitle>{frame.name}</FrameTitle>
            <StackFrame>
              {frame.localVars.map(([name, value]) => (
                <StackItem key={name}>
                  {name}: {value}
                </StackItem>
              ))}
              {frame.arguments.map(([name, value]) => (
                <StackItem key={name} style={{ '--background': 'var(--teal)' }}>
                  {name}: {value}
                </StackItem>
              ))}
              <StackItem
                style={{ '--background': 'var(--purple)', color: 'white' }}
              >
                Line {frame.returnAddress}
              </StackItem>
            </StackFrame>
          </motion.li>
        ))}
      </AnimatePresence>
    </Stack>
  )
}

const Stack = styled.ul`
  display: flex;
  flex-direction: column-reverse;
  background: var(--gray200);
  border-radius: 8px;
  border: 2px solid var(--border-color);
  font-family: var(--text-mono);
  font-size: var(--text-sm);
  padding: 16px;
  gap: 16px;
`

const FrameTitle = styled(motion.h1).attrs({ layout: true })`
  color: var(--color-text-secondary);
`

const StackFrame = styled.ul`
  > * {
    margin-top: 4px;
  }
`

const StackItem = styled(motion.li).attrs({
  layout: true,
  ...animationProps,
})`
  background: var(--background, var(--white));
  border-radius: 4px;
  padding: 8px;
  text-align: center;
`
