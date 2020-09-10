import { ReactNodeI } from '@codelab/node'

export const CreateFirstNodeButton: ReactNodeI = {
  nodeType: 'React',
  type: 'Button',
  props: { type: 'primary' },
  children: [
    { type: 'Text', nodeType: 'React', props: { value: 'Create first Node' } },
  ],
}
