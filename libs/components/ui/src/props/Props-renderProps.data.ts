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

//regular props passed as deep as possible
export const RegularPropsCbData: ReactNodeI = {
  type: 'Html.div',
  nodeType: 'React',
  props: {
    regularprop: 'regularProp',
    onClick: {
      eval: true,
      value:
        'return ()=>console.log("root onclick callback fired. regularprop: ", this.props.regularprop)',
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
          props: {},
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

//We can pass custom prop cb via provider, but it'll be accessible only for 1 layer
export const ProviderCustomPropsCbData: ReactNodeI = {
  type: 'Provider',
  nodeType: 'React',
  props: {
    customCb: {
      eval: true,
      value: 'return ()=>console.log("customCb is fired!")',
    },
  },
  children: [
    {
      type: 'Button',
      nodeType: 'React',
      props: {
        onClick: {
          eval: true,
          value: 'return ()=>this.props.customCb()',
        },
      },
      children: [
        {
          nodeType: 'React',
          type: 'Text',
          props: {
            value: '1 layer cmt fire parent cb',
          },
        },
      ],
    },
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
              value: 'return ()=>this.props.customCb()',
            },
          },
          children: [
            {
              nodeType: 'React',
              type: 'Text',
              props: {
                value: "deeper layer cmt doesn't fire parent cb",
              },
            },
          ],
        },
      ],
    },
  ],
}

//this case doesn't work. Callback is string instead of function
export const leafRenderPropsInternalCustomCbData: ReactNodeI = {
  type: 'Html.div',
  nodeType: 'React',
  props: {
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

// renderProps 'leaf' loosing their context. Example below can't find this.touch
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
