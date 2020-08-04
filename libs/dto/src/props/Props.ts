export type PropItem = Function & PropValue

export type PropValue = {
  eval?: boolean // eval the value
  renderProps?: boolean // Pass props to child
  value: string
}

// This is purely object shape, not concerning React props like PropTypes
export type Props = {
  ctx?: PropItem // Made available to current function props
  [name: string]: PropItem
}

export type PropsFromKeys<Keys extends string> = {
  [K in Keys]?: string | number
}
