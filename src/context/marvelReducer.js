import {
    FETCH_CHAR_LIST
} from './types';

export default (state, action)=>{

    switch(action.type){

        case FETCH_CHAR_LIST:
            return{
                ...state,
                characters: action.payload,
                
            }

        default:
            return state;
    }
}