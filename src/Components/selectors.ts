import * as _ from 'lodash';
import {MNode} from '../types';

interface Level {
  level: number;
  childLength: number;
  hasChild: boolean;
}

export type LeveredNode = MNode & Level;

const mapped = (n: any, level: number): LeveredNode[] =>
  [{
    ...n,
    level,
    childLength: n.child ? n.child.length : 0,
    hasChild: !!n.child,
    child: undefined,
  }, (n.child && !n.isHidden) ? [n.child.map(sub => mapped(sub, level + 1))] : []];

export const createFlatNodes = (nodes: MNode[]): LeveredNode[] =>
  _.flattenDeep(nodes.map(n => mapped(n, 1) as any));

export const filterNodes = (viewNodes: LeveredNode[], searchTerm: string) =>
  searchTerm ? viewNodes.filter(n => n.text.toLowerCase().indexOf(searchTerm) >= 0) : viewNodes;