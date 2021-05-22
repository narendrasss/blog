import Highlight, { defaultProps } from 'prism-react-renderer'
import { AnimateSharedLayout, motion } from 'framer-motion'
import { styled } from 'twin.macro'

function CodeBlock({
  children = '',
  highlight = '',
  style = {},
  showLineNumbers = false,
  className: containerClass,
}) {
  const lineNumbers = getLineNumbers(highlight)
  return (
    <Highlight {...defaultProps} code={getCode(children).trim()} language="jsx">
      {({ className, tokens, getTokenProps }) => {
        return (
          <StyledBlock
            className={`${className} ${containerClass}`}
            tw="rounded-md overflow-x-auto text-sm"
            style={style}
          >
            <AnimateSharedLayout>
              {tokens.map((line, i) => (
                <Line key={i} style={{ '--pl': showLineNumbers && '40px' }}>
                  {showLineNumbers && <LineNumber>{i + 1}</LineNumber>}
                  {lineNumbers.includes(i + 1) && (
                    <Highlighter style={{ scale: 1.05 }} />
                  )}
                  {line.map((token, key) => {
                    const { children, className } = getTokenProps({
                      token,
                      key,
                    })
                    const [, tokenType] = className.split(' ')
                    return (
                      <span
                        key={key}
                        style={{
                          color: `var(--token-color-${tokenType})`,
                          fontStyle: `var(--token-style-${tokenType})`,
                        }}
                      >
                        {children}
                      </span>
                    )
                  })}
                </Line>
              ))}
            </AnimateSharedLayout>
          </StyledBlock>
        )
      }}
    </Highlight>
  )
}

export default styled(CodeBlock)``

function getCode(children) {
  if (typeof children === 'string') {
    return children
  }

  if (children.props?.mdxType === 'code') {
    return children.props.children
  }

  return ''
}

function getLineNumbers(highlight) {
  const numbers =
    typeof highlight === 'number'
      ? [highlight]
      : highlight.split(',').map(Number)
  return {
    /**
     * @param {number} lineNumber
     * @returns {boolean} whether the given line number should be highlighted
     */
    includes(lineNumber) {
      if (!numbers.length) {
        return false
      }
      return numbers.includes(lineNumber)
    },
  }
}

const StyledBlock = styled.pre`
  background: var(--code-background);
  border: 2px solid var(--code-border-color, black);
  color: var(--code-text-color);
  padding: var(--space, 24px);
`

const Line = styled.div`
  position: relative;
  padding-left: var(--pl, 0px);
`

const LineNumber = styled.p`
  font-family: var(--text-mono);
  color: var(--color-text-secondary);
  position: absolute;
  left: 0;
  top: 0;
`

const Highlighter = styled(motion.div).attrs({ layoutId: 'highlighter' })`
  background: hsla(0, 0%, 40%, 0.1);
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
`
