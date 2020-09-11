import { ReactNodeI } from '@codelab/node'

export const NodeMngmtPanel: ReactNodeI = {
  type: 'Html.div',
  nodeType: 'React',
  children: [
    wrapWithHtmlDiv([
      {
        nodeType: 'React',
        type: 'Text',
        props: { value: 'Current Selection: ' },
      },
      {
        nodeType: 'React',
        type: 'Text',
        props: { value: 'Selected leaf' },
      },
    ]),
    wrapWithHtmlDiv([
      {
        nodeType: 'React',
        type: 'Button',
        props: { type: 'primary' },
        children: [
          {
            type: 'Text',
            nodeType: 'React',
            props: { value: 'Add to Selected Node' },
          },
        ],
      },
    ]),
    wrapWithHtmlDiv([
      {
        nodeType: 'React',
        type: 'Button',
        props: { type: 'primary' },
        children: [
          {
            type: 'Text',
            nodeType: 'React',
            props: { value: 'Delete Selected Node' },
          },
        ],
      },
    ]),
  ],
}

function wrapWithHtmlDiv(nodes: ReactNodeI[]): ReactNodeI {
  return {
    type: 'Html.div',
    nodeType: 'React',
    children: nodes,
  }
}
