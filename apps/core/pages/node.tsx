import React from 'react'
import { TreeDom } from '@codelab/ui'
import { ReactNodeI, NodeTypeEnum, NodeReactTypeEnum } from '@codelab/node'
import { generateSelectOption } from './node.helpers'

const CreateFirstNodeButton: ReactNodeI = {
  nodeType: 'React',
  type: 'Button',
  props: { type: 'primary' },
  children: [
    { type: 'Text', nodeType: 'React', props: { value: 'Create first Node' } },
  ],
}
const CreateNodeFormNodeTypeSelect: ReactNodeI = {
  type: 'Form.Item',
  nodeType: 'React',
  props: {
    label: 'NodeType',
    name: 'nodeType',
  },
  children: [
    {
      type: 'Select',
      nodeType: 'React',
      props: {
        style: {
          width: 300,
        },
      },
      children: Object.keys(NodeTypeEnum).map((nodeType) =>
        generateSelectOption<NodeTypeEnum>(NodeTypeEnum[nodeType]),
      ),
    },
  ],
}
const CreateNodeFormTypeSelect: ReactNodeI = {
  type: 'Form.Item',
  nodeType: 'React',
  props: {
    label: 'Type',
    name: 'type',
  },
  children: [
    {
      type: 'Select',
      nodeType: 'React',
      props: {
        style: {
          width: 300,
        },
      },
      children: Object.keys(NodeReactTypeEnum).map((nodeReactType) =>
        generateSelectOption<NodeReactTypeEnum>(
          NodeReactTypeEnum[nodeReactType],
        ),
      ),
    },
  ],
}
const CreateNodeFormProps: ReactNodeI = {
  type: 'Form.Item',
  nodeType: 'React',
  props: {
    label: 'Prop',
    name: 'prop',
  },
  children: [
    {
      type: 'Form.List',
      nodeType: 'React',
      props: {
        name: 'fields',
      },
      children: [
        {
          type: 'Form.Item',
          nodeType: 'React',
          props: {
            name: 'name',
          },
          children: [
            {
              type: 'Input',
              nodeType: 'React',
              props: {
                placeholder: 'Name',
              },
            },
          ],
        },
        {
          type: 'Form.Item',
          nodeType: 'React',
          props: {
            name: 'type',
          },
          children: [
            {
              type: 'Input',
              nodeType: 'React',
              props: {
                placeholder: 'Type',
              },
            },
          ],
        },
      ],
    },
  ],
}

const CreateNodeForm: ReactNodeI = {
  type: 'Modal',
  nodeType: 'React',
  props: {
    title: 'Create Node Form',
  },
  children: [
    {
      type: 'Form',
      nodeType: 'React',
      props: {
        ctx: { eval: true, value: '' },
        name: 'basic',
        initialValues: { nodeType: NodeTypeEnum.React },
        onFinish: '() => console.log("good")',
      },
      children: [
        CreateNodeFormNodeTypeSelect,
        CreateNodeFormTypeSelect,
        CreateNodeFormProps,
      ],
    },
  ],
}
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
