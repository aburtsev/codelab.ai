import { ReactNodeI } from '@codelab/shared/interface/node';
import {TreeProps, TreeNodeProps} from '../../../../libs/components/ui/src/components/tree'
// temporary solution. Waiting until https://github.com/codelab-ai/codelab.ai/issues/90
// be done
//

export const treeData: ReactNodeI<TreeProps | TreeNodeProps> = {
  type: 'Tree',
  nodeType: 'React',
  props: {
    showLine: true,
    showIcon: true,
    treeData: [
      // {
      //   title: 'parent 1',
      //   key: '0-0',
      //   children: [
      //     {
      //       title: 'parent 1-0',
      //       key: '0-0-0',
      //       children: [
      //         {
      //           title: 'leaf 1',
      //           key: '0-0-0-0',
      //         },
      //         {
      //           title: 'leaf 2',
      //           key: '0-0-0-1',
      //         },
      //       ],
      //     },
      //     {
      //       title: 'parent 1-1',
      //       key: '0-0-1',
      //       children: [
      //         {
      //           title: 'sss',
      //           key: '0-0-1-0',
      //         },
      //       ],
      //     },
      //   ],
      // },
    ],
  },
}
