import { Edge as IEdge } from './Edge.i'
import { Vertex } from './Vertex.i'

export class Edge implements IEdge {
  id: string

  start: Vertex

  end: Vertex

  constructor(start: Vertex, end: Vertex, id?: string) {
    this.start = start
    this.end = end
    this.id = id ?? `${start.id}_${end.id}`
  }
}
