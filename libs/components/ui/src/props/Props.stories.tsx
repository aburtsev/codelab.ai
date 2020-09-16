import React from 'react'
import { TreeDom } from '../renderer/TreeDom'
import {
  renderPropsData,
  leafRenderPropsExternalCbData,
  leafRenderPropsInternalCbData,
} from './Props-renderProps.data'
import { divData } from '../components/html/Html.data'

export default {
  title: 'Props',
}

export const Default = () => {
  const Component = TreeDom.render(renderPropsData)

  return <Component />
}

export const Children = () => {
  const Div = TreeDom.render(divData)

  return <Div>Content</Div>
}

export const InternalLeafPropCb = () => {
  const Component = TreeDom.render(leafRenderPropsInternalCbData)

  return <Component />
}

export const extPropCb = () => {
  const extCb = () => {
    console.log('External cb triggered')
  }
  const Component = TreeDom.render(leafRenderPropsExternalCbData)

  return <Component extCb={extCb} />
}
