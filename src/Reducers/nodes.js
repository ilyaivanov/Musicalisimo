import nodesReducer from './nodes.traversal';
import hideNodesReducer from './nodes.hide';
import lasftfmReducer from './lasftfmReducer';
import { updateIds } from "./mutators";

export const initialState = {
  nodes: [],
  isFocused: false
};
export default function reducer(state = initialState, action) {
  if (action.type.startsWith('select_')) {
    return {
      ...state,
      isFocused: false,
    };
  }
  if (state.isFocused) {
    return {
      ...state,
      nodes: lasftfmReducer(hideNodesReducer(nodesReducer(state.nodes, action), action), action),
    };
  }
  else
    return state;
}


export const searchReducer = (state, action) => {
  if (action.type === 'select_search') {
    return {
      ...state,
      isFocused: true,
    };
  }
  return reducer(state, action)
};

export const favoritesReducer = (state, action) => {
  if (action.type === 'select_favorites') {
    return {
      ...state,
      isFocused: true,
    };
  }

  if (action.type === 'add_to_favorites') {
    return {
      ...state,
      nodes: state.nodes.push(updateIds(action.node.merge({ isSelected: false }))),
    };
  }
  return reducer(state, action)
};
