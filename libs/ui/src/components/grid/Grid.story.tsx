import React from 'react'
import GridLayout, {
  Responsive as ResponsiveGrid,
  WidthProvider,
} from 'react-grid-layout'
import { TreeDom } from '../../renderer/TreeDom'
import { gridData } from './Grid.data'

export default {
  title: 'Grid',
}

const ResponsiveGridLayout = WidthProvider(ResponsiveGrid)

export const Default = () => {
  const Grid = TreeDom.render(gridData)

  return <Grid />
}

const screenSizes = ['lg', 'md', 'sm', 'xs', 'xxs']
const layout = [
  { i: 'a', x: 0, y: 0, w: 1, h: 2, static: true },
  { i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
  { i: 'c', x: 4, y: 0, w: 1, h: 2 },
]
const screenLayout = screenSizes.reduce((accLayout, screenSize) => {
  return {
    ...accLayout,
    [screenSize]: layout,
  }
}, {})

const Item = ({ children, ...props }: any) => {
  return <div {...props}>{children}</div>
}

export const Alert = () => {
  return (
    <GridLayout
      className="layout"
      layout={layout}
      cols={12}
      rowHeight={30}
      width={1200}
    >
      <Item key="a">A</Item>
      <Item key="b">B</Item>
      <Item key="c">C</Item>
    </GridLayout>
  )
}
