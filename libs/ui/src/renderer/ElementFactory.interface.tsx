import { Attributes, ComponentClass, FunctionComponent } from 'react'
import { PropsFilter } from '@codelab/props'

export type ElementParameters<P> = [
  FunctionComponent<P> | ComponentClass<P> | string,
  Attributes & P,
  PropsFilter<P>?,
]
