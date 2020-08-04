import { Props, PropItem } from './Props.interface'

export const isEvalPropValue = (
  propValue: Props[keyof Props],
): propValue is PropItem => {
  return typeof propValue === 'object' && !!propValue?.eval
}

export const isRenderPropValue = (
  propValue: Props[keyof Props],
): propValue is PropItem => {
  return typeof propValue === 'object' && !!propValue?.renderProps
}
