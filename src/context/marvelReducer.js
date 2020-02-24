import { FETCH_CHAR_LIST, SET_LOADING, FETCH_WITH_OFFSET, COUNT_FETCH, FETCH_SEARCH, SET_SEARCH } from './types';
import marvelCont from './marvelContext';

export default (state, action) => {
  switch (action.type) {
    case FETCH_CHAR_LIST:
      return {
        ...state,
        characters: action.payload  ,
        loading: false
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
        loading: false
      }

    case SET_LOADING:
      return {
        ...state,
        loading: true
      };

    case SET_SEARCH:
      return {
        ...state,
        search: true
      }

    case COUNT_FETCH: 
      return{
        ...state,
        fetchCounter: state.fetchCounter+1,
      };

    

    default:
      return state;
  }
};
