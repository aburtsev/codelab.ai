import { ReactNodeI } from '@codelab/shared/interface/node'
import { Text } from '../text'
import { Descriptions } from './Descriptions.types'

export const descriptionsData: ReactNodeI<
  Descriptions.Props | Descriptions.ItemProps | Text.Props
> = {
  type: 'Descriptions',
  nodeType: 'React',
  props: {
    title: 'User Info',
  },
  children: [
    {
      type: 'Descriptions.Item',
      nodeType: 'React',
      props: {
        label: 'UserName',
      },
      children: [
        {
          type: 'Text',
          nodeType: 'React',
          props: {
            value: 'Zhou Maomao',
          },
        },
      ],
    },
    {
      type: 'Descriptions.Item',
      nodeType: 'React',
      props: {
        label: 'Telephone',
      },
      children: [
        {
          type: 'Text',
          nodeType: 'React',
          props: {
            value: '1810000000',
          },
        },
      ],
    },
    {
      type: 'Descriptions.Item',
      nodeType: 'React',
      props: {
        label: 'Live',
      },
      children: [
        {
          type: 'Text',
          nodeType: 'React',
          props: {
            value: 'Hangzhou, Zhejiang',
          },
        },
      ],
    },
    {
      type: 'Descriptions.Item',
      nodeType: 'React',
      props: {
        label: 'Address',
      },
      children: [
        {
          type: 'Text',
          nodeType: 'React',
          props: {
            value:
              'No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China',
          },
        },
      ],
    },
  ],
}
