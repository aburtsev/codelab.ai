import { PropsFromKeys } from '@codelab/shared/interface/props'

export namespace Popconfirm {
  export const propKeys = [
    'cancelText',
    'okText',
    'okType',
    'okButtonProps',
    'cancelButtonProps',
    'title',
    'onCancel',
    'onConfirm',
    'icon',
    'disabled',
    'arrowPointAtCenter',
    'autoAdjustOverflow',
    'defaultVisible',
    'color',
    'getPopupContainer',
    'mouseEnterDelay',
    'mouseLeaveDelay',
    'overlayClassName',
    'overlayStyle',
    'placement',
    'trigger',
    'visible',
    'onVisibleChange',
    'align',
    'destroyTooltipOnHide',
  ] as const

  export type Props = PropsFromKeys<typeof propKeys[number]>
}
