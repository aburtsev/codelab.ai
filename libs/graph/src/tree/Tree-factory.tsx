/**
 * We construct a tree by traversing the tree data using the treeAppender strategy
 */
import { Props } from '@codelab/props'
import { reduce } from 'lodash'
import { treeWalker } from '../traversal'
import {
  graphAppenderIteratee,
  treeAppenderIteratee,
} from '../traversal/Traversal-iteratee'
import { Node } from '../node'
import { GraphAcc, TreeAcc } from './Tree.i'
import { Graph } from '../graph'
import { ReactNodeA } from '../node/codec/Node-react'
import { NodeA, NodeI } from '../node/codec/Node.codec.i'

/**
 * This method generates a non-binary tree given JSON input. Each input node is
 *
 * @param input - Input data with a tree-like structure, in JSON format.
 *
 * @returns Root `Node` of the `Tree`
 *
 * ```typescript
 * const tree = makeTree(data)
 * ```
 *
 */
export function makeTree<P extends Props>(input: NodeI<P>): Node<P> {
  const root = new Node<P>(input)
  const subTreeAcc = {
    subTree: root,
    prev: root,
    parent: root,
  }

  return reduce<ReactNodeA<P>, TreeAcc<P>>(
    (root.dto as ReactNodeA).children,
    treeWalker<TreeAcc<P>, NodeA<P>>(root.dto, treeAppenderIteratee),
    subTreeAcc,
  ).subTree
}

/**
 * Using Vertex/Edge representation
 */
export function makeGraph<P extends Props>(input: NodeI<P>): Graph {
  // Convert input to Node input structure first, nodeFinder requires Node representation
  const root = makeTree(input)
  const g = new Graph({ vertices: [], edges: [] })
  const subTreeAcc = {
    graph: g,
    subTree: root,
    parent: root,
  }

  g.addVertexFromNode(root)

  return reduce<NodeA<P>, GraphAcc<P>>(
    root.dto.children ?? [],
    treeWalker<GraphAcc<P>, NodeA<P>>(root.dto, graphAppenderIteratee),
    subTreeAcc,
  ).graph
}

// export function fromNodes<P extends Props = any>(
//   inputNodes: Array<Node<P>>,
// ): Node<P> {
//   const nodes = inputNodes.map((inputNode) => new Node(inputNode))

//   return new Node()
//   // const root = new Node<P>(input)
//   // const subTreeAcc = {
//   //   subTree: root,
//   //   prev: root,
//   //   parent: root,
//   // }
//   // return reduce<DTONode<P>, TreeAcc<P>>(
//   //   root.dto.children,
//   //   treeWalker<TreeAcc<P>, DTONode<P>>(root.dto, treeAppenderIteratee),
//   //   subTreeAcc,
//   // ).subTree
// }
