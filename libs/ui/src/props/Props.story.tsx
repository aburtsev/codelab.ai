import React from 'react'
import { TreeDom } from '../renderer/TreeDom'
import { div, renderPropsData } from './Props-renderProps.data'

export default {
  title: 'Props',
}

export const Default = () => {
  const Component = TreeDom.render(renderPropsData)

  return <Component />
}

export const Children = () => {
  const Div = TreeDom.render(div)

  return <Div>Content</Div>
}
