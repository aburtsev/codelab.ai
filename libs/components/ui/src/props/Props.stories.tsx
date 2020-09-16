import React from 'react'
import { TreeDom } from '../renderer/TreeDom'
import {
  renderPropsData,
  leafRenderPropsExternalCbData,
  leafRenderPropsInternalCustomCbData,
  leafRenderPropsExternalAndPassKnownPropData,
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

export const InternalLeafPropCustomCb = () => {
  const Component = TreeDom.render(leafRenderPropsInternalCustomCbData)

  return <Component />
}

  const extCb = () => {
    console.log('External cb triggered')
  }
export const externalPropCb = () => {
  const Component = TreeDom.render(leafRenderPropsExternalCbData)

  return <Component extCb={extCb} />
}

export const externalPropAndCtxCb = () => {
  const Component = TreeDom.render(leafRenderPropsExternalAndPassKnownPropData)

  return <Component extCb={extCb} />
}
