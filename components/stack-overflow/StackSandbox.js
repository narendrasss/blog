import React from 'react'
import { styled } from 'twin.macro'

import CodeBlock from '@/elements/CodeBlock'

import CallStack from './CallStack'

const code = `function compute(a, b) {
  const product = multiply(a, b)
  return add(product, b)
}

function multiply(a, b) {
  return a * b
}

function add(a, b) {
  return a + b
}

compute(3, 2)
`

const computeFrame = {
  name: 'compute',
  arguments: [
    ['a', 3],
    ['b', 2],
  ],
  returnAddress: 15,
  localVars: [],
}

const computeFrameWithVars = {
  ...computeFrame,
  localVars: [['product', 6]],
}

const multiplyFrame = {
  name: 'multiply',
  arguments: [
    ['a', 3],
    ['b', 2],
  ],
  returnAddress: 2,
  localVars: [],
}

const addFrame = {
  name: 'add',
  arguments: [
    ['a', 6],
    ['b', 2],
  ],
  returnAddress: 3,
  localVars: [],
}

const frames = [
  [14],
  [1, computeFrame],
  [2, computeFrame],
  [6, computeFrame, multiplyFrame],
  [2, computeFrameWithVars],
  [3, computeFrameWithVars],
  [10, computeFrameWithVars, addFrame],
  [3, computeFrameWithVars],
  [],
]

export default function StackSandbox() {
  const [activeFrameIndex, setActiveFrameIndex] = React.useState(0)
  const [activeLine, ...currentStack] = frames[activeFrameIndex]
  return (
    <>
      <div>
        <input
          type="range"
          min={0}
          max={frames.length - 1}
          value={activeFrameIndex}
          onChange={(evt) => setActiveFrameIndex(+evt.target.value)}
        />
      </div>
      <SandboxWrapper>
        <CodeBlock highlight={activeLine} showLineNumbers>
          {code}
        </CodeBlock>
        <CallStack stack={currentStack} />
      </SandboxWrapper>
    </>
  )
}

const SandboxWrapper = styled.div`
  display: grid;
  height: 32rem;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`
