import React from 'react'
import { NodeMngmtPanel } from './NodeMngmtPanel'
import { CreateNodeForm } from './CreateNodeForm'
import { treeData } from './NodeTree'
import { ReactNodeI } from '@codelab/shared/interface/node'
import { TreeDom } from '@codelab/components/ui'

// TODO Implement draft Node adding = props are empty
// TODO Implement Popover for adding props (currently it's not clear how get access to add button, it's under the hood)
//
const NodeTreeBuilderData: ReactNodeI = {
  type: 'Provider',
  nodeType: 'React',
  props: {
    ctx: {
      eval: true,
      value:
        'const [isCreateNodeFormVisible, setCreateNodeFormVisible] = this.React.useState(false); return { isCreateNodeFormVisible, setCreateNodeFormVisible }',
    },
    onOk: {
      eval: true,
      value: 'return () => this.setCreateNodeFormVisible(false)',
    },
    onCancel: {
      eval: true,
      value: 'return () => this.setCreateNodeFormVisible(false)',
    },
    visible: {
      eval: true,
      value: 'return this.isCreateNodeFormVisible',
    },
    onClick: {
      eval: true,
      value: 'return () => this.setCreateNodeFormVisible(true)',
    },
  },
  children: [
    {
      type: 'Html.div',
      nodeType: 'React',
      children: [NodeMngmtPanel],
    },
    treeData,
    CreateNodeForm,
  ],
}

// TODO: add type for Node
const Node = () => {
  const NodeTreeBuilder = TreeDom.render(NodeTreeBuilderData)

  return <NodeTreeBuilder />
}

export default Node
