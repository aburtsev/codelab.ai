/**
 * Recursive types
 *
 * https://www.npmjs.com/package/io-ts/v/1.0.5#recursive-types
 * https://github.com/gcanti/io-ts-codegen/issues/42
 * https://github.com/gcanti/io-ts/issues/307
 */
import { decode } from '@codelab/shared/common'
import * as t from 'io-ts'
import { Context, Validation } from 'io-ts'
import { v4 as uuidv4 } from 'uuid'
import {
  ReactNodeA,
  TreeNodeA,
  RefNodeA,
  NodeA,
  NodeI,
  isReactNode,
  isRefNode,
  isTreeNode,
} from '@codelab/shared/interface/node'
import { reactNode } from '../subtypes/react/react'
import { treeNode } from '../subtypes/tree/tree'
import { refNode } from '../subtypes/ref/ref'

export const nodeInput: t.Type<NodeI> = t.union([reactNode, treeNode, refNode])

// <A, O, I>
export const nodeC = new t.Type<NodeA, NodeA, NodeI>(
  'Node',
  /**
   * We could just use nodeInput.decode() without creating a custom codec, but this gives us a dedicated place to type check our input.
   *
   * In our case, we require either an ID or type.
   */
  // is A
  (u): u is NodeA => {
    return true
    // return (
    //   !!(u as NodeDTO).id &&
    //   !!(u as NodeDTO).type &&
    //   !!(u as NodeDTO).props &&
    //   !!(u as NodeDTO).children
    // )
  },
  /**
   * Here we use the nodeInput.decode() to set default params.
   */
  (input: NodeI, context: Context): Validation<NodeA> => {
    const { data } = decode(input, nodeInput)

    if (isReactNode(data)) {
      return t.success<ReactNodeA>({ id: uuidv4(), ...data } as ReactNodeA)
    }

    if (isRefNode(data)) {
      return t.success<RefNodeA>(data as RefNodeA)
    }

    if (isTreeNode(data)) {
      return t.success<TreeNodeA>(data as TreeNodeA)
    }

    return t.failure<NodeA>(input, context)
  },
  t.identity,
)
