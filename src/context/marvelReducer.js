import { FETCH_CHAR_LIST, SET_LOADING, FETCH_WITH_OFFSET, COUNT_FETCH } from './types';
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

    case SET_LOADING:
      return {
        ...state,
        loading: true
      };

    case COUNT_FETCH: 
      return{
        ...state,
        fetchCounter: state.fetchCounter+1,
      };

    

    default:
      return state;
  }
};
