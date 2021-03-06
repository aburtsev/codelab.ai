import { PropsFromKeys } from '@codelab/shared/interface/props'

export namespace Icon {
  export const propKeys = [
    'type',
    'style',
    'theme',
    'spin',
    'rotate',
    'twoToneColor',
  ] as const

  export type Props = PropsFromKeys<typeof propKeys[number]>
}
