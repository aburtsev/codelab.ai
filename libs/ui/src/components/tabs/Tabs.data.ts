import { ReactNodeI } from '@codelab/shared/interface/node'
import { TextProps } from '../text/Text.types'
import { TabsProps, TabPaneProps } from './Tabs.types'

export const tabsData: ReactNodeI<TabsProps | TabPaneProps | TextProps> = {
  type: 'Tabs',
  nodeType: 'React',
  props: {
    defaultActiveKey: 1,
  },
  children: [
    {
      type: 'Tabs.TabPane',
      nodeType: 'React',
      props: {
        tab: 'Tab 1',
        key: '1',
      },
      children: [
        {
          type: 'Text',
          nodeType: 'React',
          props: {
            value: 'Content of Tab pane 1',
          },
        },
      ],
    },
    {
      type: 'Tabs.TabPane',
      nodeType: 'React',
      props: {
        tab: 'Tab 2',
        key: '2',
      },
      children: [
        {
          type: 'Text',
          nodeType: 'React',
          props: {
            value: 'Content of Tab pane 2',
          },
        },
      ],
    },
    {
      type: 'Tabs.TabPane',
      nodeType: 'React',
      props: {
        tab: 'Tab 3',
        key: '3',
        disabled: true,
      },
    },
  ],
}
