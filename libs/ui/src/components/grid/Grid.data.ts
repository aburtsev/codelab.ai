import { InputNode } from '@codelab/graph'

export const gridData: InputNode = {
  type: 'Grid',
  props: {
    cols: 12,
    rowHeight: 30,
    width: 1200,
    layout: [
      { i: 'a', x: 0, y: 0, w: 1, h: 2, static: true },
      { i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
      { i: 'c', x: 4, y: 0, w: 1, h: 2 },
    ],
    className: 'layout',
  },
  children: [
    {
      type: 'Html.div',
      props: {
        key: 'a',
      },
      children: [
        {
          type: 'Text',
          props: {
            value: 'A',
          },
        },
      ],
    },
    {
      type: 'Html.div',
      props: {
        key: 'b',
      },
      children: [
        {
          type: 'Text',
          props: {
            value: 'B',
          },
        },
      ],
    },
    {
      type: 'Html.div',
      props: {
        key: 'c',
      },
      children: [
        {
          type: 'Text',
          props: {
            value: 'C',
          },
        },
      ],
    },
  ],
}
