import { Node } from '@codelab/graph'
import { Props } from '@codelab/props'
// import { AlertProps } from 'antd/lib/alert'
// import { ButtonProps as AntButtonProps } from 'antd/lib/button/button'
// import { FormProps } from 'antd/lib/form/Form'
// import { FormItemProps } from 'antd/lib/form/FormItem'
import {
  ForwardRefExoticComponent,
  PropsWithoutRef,
  ReactElement,
  RefAttributes,
} from 'react'
// import { TextProps } from 'src/components/html/Html'
// import {
//   GroupProps,
//   InputProps,
//   PasswordProps,
//   SearchProps,
//   TextAreaProps,
// } from 'src/components/input/Input'
// import { OptionsProps, SelectProps } from 'src/components/select/Select'
// import { SliderProps } from 'src/components/slider/Slider'

export type Factory<P extends Props> = (node: Node<P>) => FactoryComponent<P>

export type RenderComponent<P extends ComponentProps> = (
  props: P,
) => ReactElement<any, any> | null

export type FactoryComponent<
  P extends ComponentProps,
  T extends HTMLElement = any
> =
  | RenderComponent<P>
  // | FunctionComponent<P>
  // Return type of React.forwardRef
  | ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>>

export type ComponentProps =
  // | AntButtonProps
  // | FormProps
  // | FormItemProps
  // | InputProps
  // | TextAreaProps
  // | PasswordProps
  // | SearchProps
  // | GroupProps
  // | AlertProps
  // | TextProps
  // | SelectProps
  // | OptionsProps
  // | SliderProps
  Props
