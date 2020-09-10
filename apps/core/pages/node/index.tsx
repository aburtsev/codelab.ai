import React from 'react'
import { TreeDom } from '@codelab/ui'
import { ReactNodeI, NodeTypeEnum, NodeReactTypeEnum } from '@codelab/node'
import { generateSelectOption } from './node.helpers'
import { CreateFirstNodeButton } from './CreateFirstNodeButton'
import { CreateNodeForm } from './CreateNodeForm'

const NodeTreeBuilderData: ReactNodeI = {
  type: 'Provider',
  nodeType: 'React',
  props: {
    ctx: {
      eval: true,
      value:
        'const [visible, setVisible] = this.React.useState(false); return { visible, setVisible }',
    },
    onOk: {
      eval: true,
      value: 'return () => this.setVisible(false)',
    },
    onCancel: {
      eval: true,
      value: 'return () => this.setVisible(false)',
    },
    visible: {
      eval: true,
      value: 'return this.visible',
    },
    onClick: {
      eval: true,
      value: 'return () => this.setVisible(true)',
    },
  },
  children: [CreateFirstNodeButton, CreateNodeForm],
}

// TODO: add type for Node
const Node = () => {
  const NodeTreeBuilder = TreeDom.render(NodeTreeBuilderData)

  return <NodeTreeBuilder />
}

export default Node
