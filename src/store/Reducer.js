import * as actionType from './action';
const initialState =  {
    counter : 0,
    result: []
}

const reducer = (state = initialState, action) => {

    switch(action.type){
        case actionType.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }
    case actionType.DECREMENT:
        return {
            ...state,
            counter: state.counter - 1
        }
    case actionType.ADD_FIVE:
        return {
            ...state,
            counter: state.counter + action.val
        }
    case actionType.SUB_FIVE:
        return {
            ...state,
            counter: state.counter - action.val
        }
    case actionType.STORE_RESULT:
        return {
            ...state,
            result: state.result.concat({id: new Date(), value: state.counter })
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

export default reducer;