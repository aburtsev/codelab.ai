import { ReactNodeI, NodeTypeEnum } from '@codelab/node'
import { CreateNodeFormNodeTypeSelect } from './CreateNodeFormNodeTypeSelect'
import { CreateNodeFormTypeSelect } from './CreateNodeFormTypeSelect'
import { CreateNodeFormProps } from './CreateNodeFormProps'

export const CreateNodeForm: ReactNodeI = {
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
