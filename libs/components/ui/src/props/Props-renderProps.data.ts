import { ReactNodeI } from '@codelab/shared/interface/node'

export const renderPropsData: ReactNodeI = {
  type: 'Html.div',
  nodeType: 'React',
  props: {
    visibility: '',
    parentprops: {
      renderProps: true,
      value: {},
    },
  },
  children: [
    {
      type: 'Html.div',
      nodeType: 'React',
      props: {
        childprops: {},
      },
      children: [
        {
          type: 'Html.div',
          nodeType: 'React',
          props: {
            grandchildprops: {},
          },
        },
      ],
    },
  ],
}

export const leafRenderPropsData: ReactNodeI = {
  type: 'Html.div',
  nodeType: 'React',
  props: {
    visibility: '',
    leafprops: {
      renderProps: 'leaf',
      value: {},
    },
  },
  children: [
    {
      type: 'Html.div',
      nodeType: 'React',
      props: {
        childprops: {},
      },
      children: [
        {
          type: 'Html.div',
          nodeType: 'React',
          props: {
            grandChildProps: {},
          },
        },
      ],
    },
  ],
}

export const leafRenderPropsInternalCustomCbData: ReactNodeI = {
  type: 'Html.div',
  nodeType: 'React',
  props: {
    visibility: '',
    leafcb: {
      renderProps: 'leaf',
      value: 'return ()=>console.log("leafcb fired!")',
    },
  },
  children: [
    {
      type: 'Html.div',
      nodeType: 'React',
      children: [
        {
          type: 'Button',
          nodeType: 'React',
          props: {
            onClick: {
              eval: true,
              value:
                'return ()=>{console.log(this.props.leafcb); this.props.leafcb.value() }',
            },
          },
          children: [
            {
              nodeType: 'React',
              type: 'Text',
              props: {
                value: 'Fire parent cb',
              },
            },
          ],
        },
      ],
    },
  ],
}

export const leafRenderPropsExternalCbData: ReactNodeI = {
  type: 'Html.div',
  nodeType: 'React',
  children: [
    {
      type: 'Html.div',
      nodeType: 'React',
      children: [
        {
          type: 'Button',
          nodeType: 'React',
          props: {
            onClick: {
              eval: true,
              value:
                'return ()=>{ console.log(this.props.extCb); this.props.extCb.value() }',
            },
          },
          children: [
            {
              nodeType: 'React',
              type: 'Text',
              props: {
                value: 'Fire external cb',
              },
            },
          ],
        },
      ],
    },
  ],
}

export const leafRenderPropsExternalAndPassKnownPropData: ReactNodeI = {
  type: 'Html.div',
  nodeType: 'React',
  props: {
    ctx: {
      eval: true,
      value:
        'const [isTouched, touch] = this.React.useState(false); return { isTouched, touch }',
    },
    onClick: {
      eval: true,
      renderProps: 'leaf',
      value:
        'return ()=>{ console.log(this.props.extCb); this.touch(true); this.props.extCb.value() }',
    },
  },
  children: [
    {
      type: 'Html.div',
      nodeType: 'React',
      children: [
        {
          type: 'Button',
          nodeType: 'React',
          children: [
            {
              nodeType: 'React',
              type: 'Text',
              props: {
                value: 'Fire external cb',
              },
            },
          ],
        },
      ],
    },
  ],
}
