import { ReactNodeI } from '@codelab/shared/interface/node'

export const treeData: ReactNodeI = {
  type: 'Tree',
  nodeType: 'React',
  props: {
    showLine: true,
    showIcon: true,
    treeData: {
      eval: true,
      value: 'return this.props.treeDataNodes.value?this.props.treeDataNodes.value:[]',
    },
  },
}
