import { ReactNodeI } from '@codelab/shared/interface/node'
import { Steps } from './Steps.types'

export const stepsData: ReactNodeI<Steps.Props | Steps.StepProps> = {
  type: 'Steps',
  nodeType: 'React',
  props: {
    type: 'default',
    current: 1,
  },
  children: [
    {
      type: 'Steps.Step',
      nodeType: 'React',
      props: {
        title: 'Step 1',
        description: 'This is a description.',
      },
    },
    {
      type: 'Steps.Step',
      nodeType: 'React',
      props: {
        title: 'Step 2',
        description: 'This is a description.',
      },
    },
    {
      type: 'Steps.Step',
      nodeType: 'React',
      props: {
        title: 'Step 3',
        description: 'This is a description.',
      },
    },
  ],
}
