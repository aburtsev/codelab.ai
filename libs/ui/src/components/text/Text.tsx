import { InputNode } from '@codelab/graph'
import { PropsFromKeys } from '@codelab/props'

export const textPropKeys = ['value'] as const

export type TextProps = PropsFromKeys<typeof textPropKeys[number]>

export const textData: InputNode<TextProps> = {
  type: 'Text',
  props: {
    value: 'Some text',
  },
}
