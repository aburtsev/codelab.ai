import { Vertex } from './Vertex.i'

export interface Edge {
  id: string
  start: Vertex
  end: Vertex
}
