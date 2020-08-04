import { reduce } from 'lodash'
import { isRenderPropValue } from './Props.guards'
import { Props } from './Props.interface'

/**
 * Remove render props
 */
export function filterRenderProps(props: Props): Props {
  return reduce<Props, Props>(
    props,
    (prop: Props, propValue: Props[keyof Props], propKey: keyof Props) => {
      if (isRenderPropValue(propValue)) {
        return {
          ...prop,
          [propKey]: propValue,
        }
      }

      return {
        ...prop,
      }
    },
    {},
  )
}
