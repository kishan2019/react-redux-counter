import * as actionType from '../action';
const initialState =  {
    result: []
}

const resultReducer = (state = initialState, action) => {

    switch(action.type){

    case actionType.STORE_RESULT:
        return {
            ...state,
            result: state.result.concat({id: new Date(), value: action.result })
        } 
     case actionType.DELETE_RESULT:
     const newArray = state.result.filter(result => result.id !== action.ElementId);
         return {
             ...state,
             result: newArray
         }
    default: 
        return state;
    }
}

export default resultReducer;