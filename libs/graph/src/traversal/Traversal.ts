/**
 * There are 3 types of traversal orders for a Tree data structure:
 *
 * (1) In-order
 * (2) Pre-order
 * (3) Post-order
 *
 * For building a DOM from React components, we want to use post-order. Check `Traversal.spec.ts` for an example.
 */
import { Props } from '@codelab/props'
import { reduce } from 'lodash'
import { curry } from 'ramda'
import { HasChildren } from '../node/Node.i'
import { Node } from '../node/Node'
import { NodeIteratee } from '../tree/Tree.i'

/**
 * Curried function allows us to first initialize the treeWalker with an iteratee.
 *
 * The reduce loop then passes the remaining arguments.
 *
 * @param parent - Parent `Node` of current iteratee
 */
export const treeWalker = curry(
  <Acc, Node extends HasChildren<Node>>(
    parent: Node,
    nodeIteratee: NodeIteratee<Acc, Node>,
    subTreeAcc: Acc, // prev (reduce arg)
    child: Node, // curr (reduce arg)
    index: number, // index (reduce arg)
  ) => {
    const newSubTreeAcc: Acc = nodeIteratee(
      { ...subTreeAcc, parent },
      child,
      index,
    )

    if (!Node.hasChildren<Node>(child)) {
      return newSubTreeAcc
    }

    // At junctions of tree, returns when all children appended
    return reduce<Node, Acc>(
      child.children,
      treeWalker<Acc, Node>(child, nodeIteratee),
      newSubTreeAcc,
    )
  },
)

export function traversePostOrder<P extends Props = {}>(
  node: Node<P>,
  cb: (node: Node<P>) => any,
) {
  node.children.forEach((child) => {
    traversePostOrder<P>(child, cb)
  })

  cb(node)
}

export function traversePreOrder<P extends Props = {}>(
  node: Node<P>,
  cb: (node: Node<P>) => any,
) {
  if (!node) {
    return
  }

  cb(node)

  node.children.forEach((child) => {
    traversePreOrder(child, cb)
  })
}
