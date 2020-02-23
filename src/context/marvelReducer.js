import {
    FETCH_CHAR_LIST,
    SET_LOADING
} from './types';

export default (state, action)=>{

    switch(action.type){

        case FETCH_CHAR_LIST:
            return{
                ...state,
                characters: action.payload,
                loading: false 
            };

        case SET_LOADING:
            return{
                ...state,
                loading: true
            }

        default:
            return state;
    }
}