import React from 'react'
import { NodeMngmtPanel } from './NodeMngmtPanel'
import { CreateNodeForm } from './CreateNodeForm'
import { treeData } from './NodeTree'
import { ReactNodeI } from '@codelab/shared/interface/node'
import { TreeDom } from '@codelab/components/ui'
import {Node as CoreNode} from '@codelab/core/node'

// TODO Implement draft Node adding = props are empty
// TODO Implement Popover for adding props (currently it's not clear how get access to add button, it's under the hood)
//
const NodeTreeBuilderData: ReactNodeI = {
  type: 'Provider',
  nodeType: 'React',
  props: {
    ctx: {
      eval: true,
      value: `const [isCreateNodeFormVisible, setCreateNodeFormVisible] = this.React.useState(false); return { isCreateNodeFormVisible, setCreateNodeFormVisible, selectedNode: 'Selected node' }`,
    },
    onOk: {
      eval: true,
      value: 'return () => this.setCreateNodeFormVisible(false)',
    },
    onCancel: {
      eval: true,
      value: 'return () => this.setCreateNodeFormVisible(false)',
    },
    onFinish: {
      eval: true,
      value: 'return ()=> console.log("visible")',
    },
    visible: {
      eval: true,
      value: 'return this.isCreateNodeFormVisible',
    },
    hideCreateNodeform: {
      eval: true,
      value: 'return () => this.setCreateNodeFormVisible(true)',
    },
    showCreateNodeForm: {
      eval: true,
      value: 'return () => this.setCreateNodeFormVisible(true)',
    },
    deleteNode: {
      eval: true,
      value: 'return ()=> console.log("deleteNode", this, CoreNode)',
    },
    selectedNode: {
      eval: true,
      value: 'return this.selectedNode',
    },
  },
  children: [...NodeMngmtPanel, treeData, CreateNodeForm],
}

// TODO: add type for Node
const Node = () => {
  const NodeTreeBuilder = TreeDom.render(NodeTreeBuilderData)

  return <NodeTreeBuilder />
}

export default Node
