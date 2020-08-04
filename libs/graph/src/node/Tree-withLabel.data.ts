/**
 * No type because nodeType doesn't exist on build tree
 */
export const treeDataWithLabel = {
  id: 'Root',
  label: 'Root',
  children: [
    {
      id: 'A',
      label: 'A',
      children: [
        {
          id: 'B',
          label: 'B',
          children: [
            {
              id: 'C',
              label: 'C',
            },
            {
              id: 'D',
              label: 'D',
            },
          ],
        },
      ],
    },
    {
      id: 'E',
      label: 'E',
      children: [
        {
          id: 'F',
          label: 'F',
        },
        {
          id: 'G',
          label: 'G',
        },
        {
          id: 'H',
          label: 'H',
        },
      ],
    },
  ],
}
