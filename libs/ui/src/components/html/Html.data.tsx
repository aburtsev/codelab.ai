import { InputNode } from '@codelab/graph'

export const divData: InputNode = {
  type: 'Html.div',
  props: {
    visibility: '',
    parentprops: {
      renderProps: true,
    },
  },
  children: [
    {
      type: 'Html.div',
      props: {
        childprops: {},
      },
    },
  ],
}
