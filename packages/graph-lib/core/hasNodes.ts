import { every } from 'lodash';
import { hasNode } from './hasNode';
import { Graph } from '../types';

export function hasNodes(graph: Graph, nodeIDs: string[]): boolean {
  return every(nodeIDs, (nodeID) => hasNode(graph, nodeID));
}