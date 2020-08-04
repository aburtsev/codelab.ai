import { Props } from '@codelab/props'
import { Node } from '@codelab/graph'
import { HasChildren, HasParent } from '../node/Node.i'
import { Graph } from '../graph/Graph.i'

export type NodeIteratee<
  SubTree,
  // SubTree extends HasParent<any>,
  TreeNode extends HasChildren<TreeNode>
> = (acc: SubTree, curr: TreeNode, index: number) => SubTree

export type BuildSubTree<SubTree, TreeNode extends HasChildren<TreeNode>> = (
  nodeAppender: NodeIteratee<SubTree, TreeNode>,
  subTree: SubTree,
  child: TreeNode,
  childIndex: number,
) => SubTree

export interface TreeAcc<P extends Props> extends HasParent<Node<P>> {
  subTree: Node<P>
  prev: Node<P>
  parent: Node<P>
}

export interface GraphAcc<P extends Props> extends HasParent<Node<P>> {
  graph: Graph
  subTree: Node<P>
  parent: Node<P>
}
