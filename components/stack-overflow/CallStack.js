import { styled } from 'twin.macro'

export default function CallStack({ className, stack }) {
  if (!stack.length) {
    return (
      <Stack>
        <p>Nothing to see here!</p>
      </Stack>
    )
  }

  return (
    <Stack className={className}>
      {stack.map((frame) => (
        <li key={frame.name}>
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
        </li>
      ))}
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

const FrameTitle = styled.h1`
  color: var(--color-text-secondary);
`

const StackFrame = styled.ul`
  > * {
    margin-top: 4px;
  }
`

const StackItem = styled.li`
  background: var(--background, var(--white));
  border-radius: 4px;
  padding: 8px;
  text-align: center;
`
