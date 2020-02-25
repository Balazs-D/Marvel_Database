import {
  FETCH_CHAR_LIST,
  SET_LOADING,
  FETCH_WITH_OFFSET,
  COUNT_FETCH,
  FETCH_SEARCH,
  SET_SEARCH,
  NULL_SEARCH,
  GET_S_TEXT,
  RESET_FETCH,
} from './types';
import marvelCont from './marvelContext';

export default (state, action) => {
  switch (action.type) {
    case FETCH_CHAR_LIST:
      return {
        ...state,
        characters: action.payload,
        loading: false,
        search: false
      };

    case FETCH_WITH_OFFSET:
      return {
        ...state,
        characters: action.payload,
        loading: false
      };

    case FETCH_SEARCH:
      return {
        ...state,
        characters: action.payload,
        loading: false,
        search: true
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true
      };

    case NULL_SEARCH:
      return {
        ...state,
        search: false
      };

    case SET_SEARCH:
      return {
        ...state,
        search: true
      };

    case COUNT_FETCH:
      return {
        ...state,
        fetchCounter: state.fetchCounter + 1
      };

    case RESET_FETCH:
      return {
        ...state,
        fetchCounter: 1
      };

    case GET_S_TEXT:
      return {
        ...state,
        searchText: action.payload
      };

    default:
      return state;
  }
};
