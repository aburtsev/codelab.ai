import { ReactNodeI, NodeTypeEnum } from '@codelab/node'
import { generateSelectOption } from './node.helpers'

export const CreateNodeFormNodeTypeSelect: ReactNodeI = {
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
