import { ReactNodeI } from '@codelab/shared/interface/node'
import { Radio } from './Radio.types'
import { Text } from '../text'

export const radioData: ReactNodeI<
  Radio.Props | Radio.GroupProps | Text.Props
> = {
  type: 'Provider',
  nodeType: 'React',
  props: {
    ctx: {
      eval: true,
      value:
        'const [value, setValue] = this.React.useState("a"); return { value, setValue }',
    },
    onChange: {
      eval: true,
      value: 'return (e) => this.setValue(e.target.value)',
    },
    value: {
      eval: true,
      value: 'return this.value',
    },
  },
  children: [
    {
      nodeType: 'React',
      type: 'Radio.Group',
      children: [
        {
          type: 'Radio',
          nodeType: 'React',
          props: { value: 'a' },
          children: [
            { type: 'Text', nodeType: 'React', props: { value: 'A' } },
          ],
        },
        {
          type: 'Radio',
          nodeType: 'React',
          props: { value: 'b' },
          children: [
            { type: 'Text', nodeType: 'React', props: { value: 'B' } },
          ],
        },
        {
          type: 'Radio',
          nodeType: 'React',
          props: { value: 'c' },
          children: [
            { type: 'Text', nodeType: 'React', props: { value: 'C' } },
          ],
        },
        {
          type: 'Radio',
          nodeType: 'React',
          props: { value: 'd' },
          children: [
            { type: 'Text', nodeType: 'React', props: { value: 'D' } },
          ],
        },
      ],
    },
  ],
}
