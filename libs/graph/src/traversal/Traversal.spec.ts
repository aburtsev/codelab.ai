import { treeData } from '../node/Tree.data'
import { traversePostOrder } from './Traversal'
import { Node } from '../node'
import { makeTree } from '../tree'

describe('Node traversal', () => {
  it('can traverse post order', () => {
    const root = makeTree(treeData)
    const queue: Array<string> = []
    const expectedQueue: Array<string> = [
      'C',
      'D',
      'B',
      'A',
      'F',
      'G',
      'H',
      'E',
      'Root',
    ]

    const cb = (node: Node) => {
      queue.push(node.id)
    }

    traversePostOrder(root, cb)

    expect(queue).toEqual(expectedQueue)
  })
})
