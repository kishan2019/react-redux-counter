import * as actionType from '../action';
const initialState =  {
    counter : 0
}

const counterReducer = (state = initialState, action) => {

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
    default: 
        return state;
    }
}

export default counterReducer;