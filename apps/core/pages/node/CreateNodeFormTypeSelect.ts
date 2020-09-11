import { generateSelectOption } from './node.helpers'
import { ReactNodeI } from '@codelab/shared/interface/node'
import { NodeReactTypeEnum } from './Node-react--type.i'

export const CreateNodeFormTypeSelect: ReactNodeI = {
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
