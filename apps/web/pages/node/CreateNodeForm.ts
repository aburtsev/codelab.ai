import { CreateNodeFormNodeTypeSelect } from './CreateNodeFormNodeTypeSelect'
import { CreateNodeFormTypeSelect } from './CreateNodeFormTypeSelect'
import { CreateNodeFormProps } from './CreateNodeFormProps'
import { ReactNodeI, NodeTypeEnum } from '@codelab/shared/interface/node'
import { CreateNodeFormSubmitBtn } from './CreateNodeFormSubmitBtn'

export const CreateNodeForm: ReactNodeI = {
  type: 'Modal',
  nodeType: 'React',
  props: {
    title: 'Create Node Form',
    footer: null,
  },
  children: [
    {
      type: 'Form',
      nodeType: 'React',
      props: {
        name: 'create-node-form',
        initialValues: { nodeType: NodeTypeEnum.React },
      },
      children: [
        CreateNodeFormNodeTypeSelect,
        CreateNodeFormTypeSelect,
        CreateNodeFormProps,
        CreateNodeFormSubmitBtn,
      ],
    },
  ],
}
