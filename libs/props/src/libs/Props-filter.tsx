import { pickBy } from 'lodash'
import { anyPass, compose, curry } from 'ramda'
import React, { FunctionComponent } from 'react'
import { Props } from './Props.interface'

export type PropFilterPredicate = (
  propKeys: Array<string>,
  value: Props[keyof Props],
  key: keyof Props,
) => boolean

export const isValidKey = curry<PropFilterPredicate>((propKeys, value, key) => {
  return [...propKeys, 'children'].includes(key as any)
})

export const propsFilter = curry((propKeys: Array<string>, props: Props) => {
  return pickBy(props, anyPass([isValidKey(propKeys) as any]))
})

export type PropsFilter<P> = (props: P) => P

export function withFilters(
  filterFn: (props: Props) => Props,
  Component: FunctionComponent<Props>,
): FunctionComponent<Props> {
  return compose((props: Props) => <Component {...props} />, filterFn)
}
