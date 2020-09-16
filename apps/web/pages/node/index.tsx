import React from 'react'
import { NodeMngmtPanel } from './NodeMngmtPanel'
import { CreateNodeForm } from './CreateNodeForm'
import { treeData } from './NodeTree'
import { ReactNodeI } from '@codelab/shared/interface/node'
import { TreeDom } from '@codelab/components/ui'
import { Node as CoreNode } from '@codelab/core/node'
import { DataNode } from 'antd/lib/tree'
import { convertNodeTreeToAntTreeDataNode } from './convertNodeTreeToAntTreeNode'

// TODO Implement draft Node adding = props are empty
// TODO Implement Popover for adding props (currently it's not clear how get access to add button, it's under the hood)
const NodeTreeBuilderData: ReactNodeI = {
  type: 'Provider',
  nodeType: 'React',
  props: {
    ctx: {
      eval: true,
      value: `const [isCreateNodeFormVisible, setCreateNodeFormVisible] = this.React.useState(false); return { isCreateNodeFormVisible, setCreateNodeFormVisible }`,
    },
    onOk: {
      eval: true,
      value: 'return () => {this.setCreateNodeFormVisible(false);}',
    },
    onCancel: {
      eval: true,
      value: 'return () => this.setCreateNodeFormVisible(false)',
    },
    onFinish: {
      eval: true,
      renderProps: 'leaf',
      value:
        'return (values) =>{this.props.addChild.value(values);debugger;this.hideCreateNodeForm();} ',
    },
    visible: {
      eval: true,
      value: 'return this.isCreateNodeFormVisible',
    },
    hideCreateNodeForm: {
      eval: true,
      value: 'return () => this.setCreateNodeFormVisible(false)',
    },
    showCreateNodeForm: {
      eval: true,
      value: 'return () => this.setCreateNodeFormVisible(true)',
    },
    deleteNode: {
      eval: true,
      value: 'return ()=> console.log("deleteNode", this)',
    },
    selectedNode: {
      eval: true,
      value: 'return this.selectedNode',
    },
  },
  children: [...NodeMngmtPanel, treeData, CreateNodeForm],
}

// TODO: add type for Node
type IRootNode = CoreNode | null

const Node = () => {
  const [selectedNode, setSelectedNode] = React.useState(null)
  const [rootNode, setRootNode] = React.useState<IRootNode>(null)
  const [treeDataNodes, setTreeDataNodes] = React.useState<DataNode[]>([])

  // TODO specify type of values. It should combine types for all types(React, Tree, Model, etc)
  const addChild = (values) => {
    console.log('addChild', this);
      const newNode =new CoreNode(values);
    if (rootNode === null) {
      setRootNode(newNode)
      setTreeDataNodes([convertNodeTreeToAntTreeDataNode(newNode)])
    } else {
      rootNode.addChild(newNode)
      setTreeDataNodes([convertNodeTreeToAntTreeDataNode(rootNode)])
    }
  }
  const selectNode = (values) => {
    console.log(values)
  }

  const NodeTreeBuilder = TreeDom.render(NodeTreeBuilderData)

  return (
    <NodeTreeBuilder
      addChild={addChild}
      treeDataNodes={treeDataNodes}
      selectedTreeNode={selectedNode}
      onTreeNodeSelected={selectNode}
    />
  )
}

export default Node
