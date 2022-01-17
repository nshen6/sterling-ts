import { createSelector } from '@reduxjs/toolkit';
import {
  GraphDrawerView,
  MainView,
  ScriptDrawerView,
  TableDrawerView,
  UiState
} from './ui';

/**
 * Select the main view.
 */
function selectMainView(state: UiState): MainView {
  return state.mainView;
}

/**
 * Select the graph drawer view.
 */
function selectGraphDrawer(state: UiState): GraphDrawerView | null {
  return state.graphViewDrawer;
}

/**
 * Select the table drawer view.
 */
function selectTableDrawer(state: UiState): TableDrawerView | null {
  return state.tableViewDrawer;
}

/**
 * Select the script drawer view.
 */
function selectScriptDrawer(state: UiState): ScriptDrawerView | null {
  return state.scriptViewDrawer;
}

/**
 * Select the open/closed state of the drawer.
 */
const selectDrawerIsCollapsed = createSelector(
  [selectMainView, selectGraphDrawer, selectTableDrawer, selectScriptDrawer],
  (main, graph, table, script) => {
    switch (main) {
      case 'GraphView':
        return graph === null;
      case 'TableView':
        return table === null;
      case 'ScriptView':
        return script === null;
      default:
        return true;
    }
  }
);

/**
 * Select the drawer view.
 */
const selectDrawerView = createSelector(
  [selectMainView, selectGraphDrawer, selectTableDrawer, selectScriptDrawer],
  (main, graph, table, script) => {
    switch (main) {
      case 'GraphView':
        return graph;
      case 'TableView':
        return table;
      case 'ScriptView':
        return script;
      default:
        return null;
    }
  }
);

export default {
  selectMainView,
  selectGraphDrawer,
  selectTableDrawer,
  selectScriptDrawer,
  selectDrawerIsCollapsed,
  selectDrawerView
};
