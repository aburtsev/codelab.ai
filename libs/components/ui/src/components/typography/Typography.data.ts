import { ReactNodeI } from '@codelab/shared/interface/node'
import { Typography } from './Typography.types'
import { Text } from '../text'

export const typographyData: ReactNodeI<
  | Typography.TextProps
  | Typography.TitleProps
  | Typography.ParagraphProps
  | Text.Props
> = {
  type: 'Typography',
  nodeType: 'React',
  children: [
    {
      type: 'Typography.Title',
      nodeType: 'React',
      props: {},
      children: [
        {
          type: 'Text',
          nodeType: 'React',
          props: {
            value: 'Introduction',
          },
        },
      ],
    },
    {
      type: 'Typography.Paragraph',
      nodeType: 'React',
      props: {},
      children: [
        {
          type: 'Text',
          nodeType: 'React',
          props: {
            value:
              'In the process of internal desktop applications development, many different design specs and implementations would be involved, which might cause designers and developers difficulties and duplication and reduce the efficiency of development.',
          },
        },
      ],
    },
    {
      type: 'Typography.Paragraph',
      nodeType: 'React',
      props: {},
      children: [
        {
          type: 'Text',
          nodeType: 'React',
          props: {
            value:
              'After massive project practice and summaries, Ant Design, a design language for background applications, is refined by Ant UED Team, which aims to ',
          },
        },
        {
          type: 'Typography.Text',
          nodeType: 'React',
          props: {
            strong: true,
          },
          children: [
            {
              type: 'Text',
              nodeType: 'React',
              props: {
                value:
                  'uniform the user interface specs for internal background projects, lower the unnecessary cost of design differences and implementation and liberate the resources of design and front-end development.',
              },
            },
          ],
        },
      ],
    },
  ],
}
