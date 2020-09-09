import { ReactNodeI } from '@codelab/node'
import { CSSProperties } from 'react'

export type PropItem = any & Function & PropValue

// Only prop value of this type is evaluated
export interface PropValue {
  eval?: boolean // evaluate to function
  renderProps?: boolean // Pass props to child
  value: string
}

// This is purely object shape, not concerning React props like PropTypes
export interface Props {
  ctx?: PropItem // Made available to current function props
  [name: string]: PropItem
}

export type PropsFromKeys<Keys extends string> =
  | {
      [K in Keys]?: string | number | boolean | PropValue | ReactNodeI | object
    }
  | { ctx?: PropItem; style?: CSSProperties }