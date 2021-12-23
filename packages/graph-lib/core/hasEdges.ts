import { every } from 'lodash';
import { hasEdge } from './hasEdge';
import { Graph } from '../types';

export function hasEdges(graph: Graph, edgeIDs: string): boolean {
  return every(edgeIDs, (edgeID) => hasEdge(graph, edgeID));
}