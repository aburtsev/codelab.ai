import { PropsFromKeys } from '@codelab/shared/interface/props'

export namespace Pagination {
  export const propKeys = [
    'current',
    'defaultCurrent',
    'defaultPageSize',
    'disabled',
    'hideOnSinglePage',
    'itemRender',
    'pageSize',
    'pageSizeOptions',
    'showLessItems',
    'showQuickJumper',
    'showSizeChanger',
    'showTitle',
    'showTotal',
    'simple',
    'size',
    'responsive',
    'total',
    'onChange',
    'onShowSizeChange',
  ]

  export type Props = PropsFromKeys<typeof propKeys[number]>
}
