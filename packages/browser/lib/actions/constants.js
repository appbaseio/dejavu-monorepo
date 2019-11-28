"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ANALYZERS = exports.STATS = exports.APPLY_QUERY = exports.SELECT_ALL = exports.QUERY = exports.VERSION = exports.NESTED_COLUMNS = exports.PAGE_SIZE = exports.SORT = exports.CURRENT_IDS = exports.UPDATING_ROW = exports.SELECTED_ROWS = exports.ERROR = exports.MODE = exports.MAPPINGS = exports.DATA = exports.CELL = exports.APP = void 0;
const APP = {
  CONNECT_REQUEST: 'CONNECT_REQUEST',
  CONNECT_SUCCESS: 'CONNECT_SUCCESS',
  CONNECT_FAILURE: 'CONNECT_FAILURE',
  DISCONNECT: 'DISCONNECT',
  SET_HEADERS: 'SET_HEADERS'
};
exports.APP = APP;
const MAPPINGS = {
  MAPPINGS_FETCH_REQUEST: 'MAPPINGS_FETCH_REQUEST',
  MAPPINGS_FETCH_SUCCESS: 'MAPPINGS_FETCH_SUCCESS',
  MAPPINGS_FETCH_FAILURE: 'MAPPINGS_FETCH_FAILURE',
  ADD_MAPPING_REQUEST: 'ADD_MAPPING_REQUEST',
  ADD_MAPPING_SUCCESS: 'ADD_MAPPING_SUCCESS',
  ADD_MAPPING_FAILURE: 'ADD_MAPPING_FAILURE',
  SET_VISIBLE_COLUMNS: 'SET_VISIBLE_COLUMNS',
  SET_NESTED_VISIBLE_COLUMNS: 'SET_NESTED_VISIBLE_COLUMNS',
  SET_ARRAY_FIELDS: 'SET_ARRAY_FIELDS'
};
exports.MAPPINGS = MAPPINGS;
const CELL = {
  CELL_ACTIVE: 'CELL_ACTIVE',
  CELL_HIGHLIGHT: 'CELL_HIGHLIGHT',
  CELL_SETVALUE_REQUEST: 'CELL_SETVALUE_REQUEST',
  CELL_SETVALUE_SUCCESS: 'CELL_SETVALUE_SUCCESS',
  CELL_SETVALUE_FAILURE: 'CELL_SETVALUE_FAILURE'
};
exports.CELL = CELL;
const DATA = {
  ADD_DATA_REQUEST: 'ADD_DATA_REQUEST',
  ADD_DATA_SUCCESS: 'ADD_DATA_SUCCESS',
  ADD_DATA_FAILUREL: 'ADD_DATA_FAILURE',
  UPDATE_REACTIVE_LIST: 'UPDATE_REACTIVE_LIST'
};
exports.DATA = DATA;
const MODE = {
  SET_MODE: 'SET_MODE'
};
exports.MODE = MODE;
const ERROR = {
  SET_ERROR: 'SET_ERROR',
  CLEAR_ERROR: 'CLEAR_ERROR'
};
exports.ERROR = ERROR;
const SELECTED_ROWS = {
  SET_SELECTED_ROWS: 'SET_SELECTED_ROWS'
};
exports.SELECTED_ROWS = SELECTED_ROWS;
const UPDATING_ROW = {
  SET_UPDATING_ROW: 'SET_UPDATING_ROW'
};
exports.UPDATING_ROW = UPDATING_ROW;
const CURRENT_IDS = {
  SET_CURRENT_IDS: 'SET_CURRENT_IDS'
};
exports.CURRENT_IDS = CURRENT_IDS;
const SORT = {
  SET_SORT: 'SET_SORT',
  RESET_SORT: 'RESET_SORT'
};
exports.SORT = SORT;
const PAGE_SIZE = {
  SET_PAGE_SIZE: 'SET_PAGE_SIZE'
};
exports.PAGE_SIZE = PAGE_SIZE;
const NESTED_COLUMNS = {
  SET_IS_SHOWING_NESTED_COLUMNS: 'SET_IS_SHOWING_NESTED_COLUMNS'
};
exports.NESTED_COLUMNS = NESTED_COLUMNS;
const VERSION = {
  SET_VERSION: 'SET_VERSION'
};
exports.VERSION = VERSION;
const QUERY = {
  SET_QUERY: 'SET_QUERY'
};
exports.QUERY = QUERY;
const SELECT_ALL = {
  SET_SELECT_ALL: 'SET_SELECT_ALL'
};
exports.SELECT_ALL = SELECT_ALL;
const APPLY_QUERY = {
  SET_APPLY_QUERY: 'SET_APPLY_QUERY'
};
exports.APPLY_QUERY = APPLY_QUERY;
const STATS = {
  SET_STATS: 'SET_STATS'
};
exports.STATS = STATS;
const ANALYZERS = {
  SET_ANALYZERS: 'SET_ANALYZERS'
};
exports.ANALYZERS = ANALYZERS;