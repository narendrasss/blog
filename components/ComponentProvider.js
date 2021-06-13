import { MDXProvider } from '@mdx-js/react'

import CodeBlock from '@/elements/CodeBlock'
import ThematicBreak from '@/elements/ThematicBreak'
import ExternalLink from '@/elements/ExternalLink'
import InlineCode from '@/elements/InlineCode'
import UnorderedList from '@/elements/UnorderedList'
import OrderedList from '@/elements/OrderedList'
import Heading from '@/elements/Heading'
import Subheading from '@/elements/Subheading'

const mdxComponents = {
  a: ExternalLink,
  pre: CodeBlock,
  hr: ThematicBreak,
  inlineCode: InlineCode,
  ul: UnorderedList,
  ol: OrderedList,
  h2: Heading,
  h3: Subheading,
}

export default function ComponentProvider(props) {
  return <MDXProvider components={mdxComponents} {...props} />
}
