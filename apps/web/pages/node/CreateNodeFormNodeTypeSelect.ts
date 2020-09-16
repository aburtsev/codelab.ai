import { generateSelectOption } from './node.helpers'
import { ReactNodeI, NodeTypeEnum } from '@codelab/shared/interface/node'

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
      // TODO need to use conditional form fields, because each type has different mandatory fields
      children: [generateSelectOption( NodeTypeEnum.React )]
        // children: Object.keys(NodeTypeEnum).map((nodeType) =>
      //   generateSelectOption<NodeTypeEnum>(NodeTypeEnum[nodeType]),
      // ),
    },
  ],
}
