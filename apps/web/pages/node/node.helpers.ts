import { ReactNodeI } from '@codelab/shared/interface/node';

interface ISelectOptionProps<T> {
  value: T
}

export function generateSelectOption<T>(
  value: T,
): ReactNodeI<ISelectOptionProps<T>> {
  return {
    type: 'Select.Option',
    nodeType: 'React',
    props: {
      value,
    },
    children: [
      {
        type: 'Text',
        nodeType: 'React',
        props: {
          value,
        },
      },
    ],
  }
}
