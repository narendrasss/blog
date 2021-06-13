import { styled } from 'twin.macro'

import ComponentProvider from '@/components/ComponentProvider'

import Heading from '@/elements/Heading'
import Subheading from '@/elements/Subheading'

export default function StackOverflowLayout({ frontMatter, children }) {
  return (
    <ComponentProvider>
      <Article>
        <h1>{frontMatter.title}</h1>
        {children}
      </Article>
    </ComponentProvider>
  )
}

const Article = styled.article`
  padding: 32px;
  display: grid;
  grid-template-columns: 1fr 60ch 45ch 1fr;
  font-family: Newsreader, sans-serif;

  --color-background: 30, 3%;

  background: hsl(var(--color-background), 11%);
  color: white;

  --code-background: hsl(var(--color-background), 11%);
  --code-text-color: hsl(60, 1%, 60%);
  --code-border-color: var(--code-background);

  --token-color-keyword: hsl(202, 15%, 47%);
  --token-color-function: hsl(60, 3%, 88%);
  --token-color-string: var(--red);
  --token-color-comment: var(--brown);
  --token-style-comment: italic;

  --inline-code-background: hsl(var(--color-background), 20%);
  --text-mono: 'Menlo';

  > * {
    grid-column: 2 / span 1;
    margin-bottom: 16px;
  }

  > ${Heading} {
    margin-top: 80px;
  }

  > ${Subheading} {
    margin-top: 48px;
  }

  > .full-width,
  > .full-width-2x {
    grid-column-end: span 2;
  }
`
