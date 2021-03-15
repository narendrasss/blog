import React from 'react'
import Head from 'next/head'
import tw, { styled, theme } from 'twin.macro'
import { MDXProvider } from '@mdx-js/react'

import CodeBlock from '../components/CodeBlock'
import FeedbackForm from '../components/FeedbackForm'
import Navigation from '../components/Navigation'

export default function Layout({ frontMatter = {}, children }) {
  return (
    <MDXProvider components={{ code: CodeBlock }}>
      <Article>
        <Head>
          <title>{frontMatter.title}</title>
        </Head>
        <Header>
          <Title>{frontMatter.title}</Title>
          <p tw="italic font-semibold text-center text-gray-600 dark:text-gray-400">
            {frontMatter.blurb}
          </p>
        </Header>
        <div tw="flex items-center justify-between mb-12! text-sm text-gray-600 dark:text-gray-100">
          <div tw="flex items-center">
            <img
              src="/avatar.jpg"
              alt="Nanda Syahrasyad"
              tw="object-cover w-8 h-8 mr-2 border-2 border-gray-400 rounded-full"
            />
            <p>Nanda Syahrasyad</p>
          </div>
          <p>
            {new Intl.DateTimeFormat('en-US', {
              month: 'long',
              year: 'numeric',
              day: 'numeric',
            }).format(new Date(frontMatter.publishDate))}
          </p>
        </div>
        {children}
      </Article>
      <footer tw="relative flex justify-center px-8 pt-64 pb-24 mt-56 bg-gray-200 h-80 dark:bg-blacks-500">
        <StyledFeedbackForm
          slug={frontMatter.__resourcePath}
          tw="absolute -top-56"
        />
        <Navigation
          style={{ width: 'min(65ch, 100%)' }}
          tw="mt-8 text-gray-500 dark:text-gray-200"
        />
      </footer>
    </MDXProvider>
  )
}

const Article = styled.article`
  ${tw`grid w-full pb-20 text-gray-900 dark:text-white`}

  grid-template-columns: 2rem 1fr 2rem;
  line-height: 1.6;

  > * {
    grid-column: 2 / span 1;
    margin-bottom: 1.5em;
  }

  > figure {
    margin-bottom: 2rem;
  }

  > .full-width,
  > .full-width-2x,
  > .full-width-3x {
    grid-column: 1 / -1;
  }

  @media screen and (min-width: 770px) {
    grid-template-columns:
      1fr minmax(0, 6rem) minmax(0, 4rem) 2rem min(65ch, calc(100% - 2rem))
      2rem minmax(0, 4rem) minmax(0, 6rem) 1fr;

    > * {
      grid-column: 5 / span 1;
    }

    > .full-width {
      grid-column: 4 / -4;
    }

    > .full-width-2x {
      grid-column: 3 / -3;
    }

    > .full-width-3x {
      grid-column: 2 / -2;
    }
  }

  h2 {
    ${tw`relative mt-8 font-serif text-3xl font-semibold`}

    &:before {
      ${tw`absolute left-0 w-6 mb-1 bg-green-500 bottom-full dark:bg-green-800`}
      content: '';
      height: 3px;
    }
  }

  h3 {
    ${tw`mt-4 text-xl font-semibold`}
  }

  ul,
  ol {
    ${tw`list-inside`}
  }

  ul {
    ${tw`list-disc`}
  }

  ol {
    ${tw`list-decimal`}
  }

  > code {
    ${tw`p-1 text-sm bg-gray-200 rounded-md dark:bg-blacks-500`}
  }

  > pre {
    grid-column: 1 / -1;

    @media screen and (min-width: 770px) {
      grid-column: 4 / -4;
    }
  }

  a {
    ${tw`font-semibold text-gray-700 hover:text-blue-500 dark:text-gray-400`}
  }

  /* Tokens */
  --code-background: white;
  --code-border-color: ${theme`colors.gray.200`};
  --token-color-keyword: ${theme`textColor.green.600`};

  --token-color-function: ${theme`textColor.green.600`};
  --token-color-string: ${theme`textColor.yellow.600`};
  --token-color-number: ${theme`textColor.gray.600`};

  --token-color-comment: ${theme`textColor.gray.600`};
  --token-style-comment: italic;

  @media (prefers-color-scheme: dark) {
    --code-background: ${theme`colors.blacks.500`};
    --code-border-color: ${theme`colors.blacks.300`};
    --token-color-keyword: ${theme`textColor.green.400`};

    --token-color-function: ${theme`textColor.green.400`};
    --token-color-string: ${theme`textColor.yellow.300`};
    --token-color-number: ${theme`textColor.gray.500`};

    --token-color-comment: ${theme`textColor.gray.500`};
  }
`

const Header = styled.header`
  ${tw`mx-auto mt-32 mb-36`}

  grid-column: 1 / -1;
  width: min(140ch, 100%);
`

const Title = styled.h1`
  ${tw`mx-auto mb-10 font-serif font-semibold text-center`}

  font-size: clamp(5rem, 8vw, 8rem);
  line-height: 0.9;
  max-width: 12ch;
`

const StyledFeedbackForm = styled(FeedbackForm)`
  width: calc(100% - 4rem);

  @media screen and (min-width: ${theme`screens.md`}) {
    width: auto;
  }
`
