import React from 'react'
import { tableData } from './Table.data'
import { TreeDom } from '../../renderer/TreeDom'

export default {
  title: 'Table',
}

export const Default = () => {
  const Table = TreeDom.render(tableData)

  return <Table />
}
