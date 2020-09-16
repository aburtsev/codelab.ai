import { ReactNodeI } from '@codelab/shared/interface/node'

export const NodeMngmtPanel: ReactNodeI[] = [

    {
      nodeType: 'React',
      type: 'Text',
      props: { value: 'Current Selection: ' },
    },
    {
      nodeType: 'React',
      type: 'Text',
      props: {
        value: {
          eval: true,
          value: 'return this.props.selectedNode',
        },
      },
    },
    {
      nodeType: 'React',
      type: 'Button',
      props: {
        type: 'primary',
        onClick: {
          eval: true,
          value: 'return ()=>{this.props.showCreateNodeForm()}',
        },
      },
      children: [
        {
          type: 'Text',
          nodeType: 'React',
          props: {
            value: 'Add to Selected Node',
          },
        },
      ],
    },
    {
      nodeType: 'React',
      type: 'Button',
      props: {
        type: 'primary',
        onClick: {
          eval: true,
          value: 'return ()=>{this.props.deleteNode()}',
        },
      },
      children: [
        {
          type: 'Text',
          nodeType: 'React',
          props: {
            value: 'Delete Selected Node',
          },
        },
      ],
    },
]
