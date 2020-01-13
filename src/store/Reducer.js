/* eslint-disable default-case */
const initialState =  {
    counter : 0,
    result: []
}

const reducer = (state = initialState, action) => {

    switch(action.type){
        case 'INCREMENT':
            return {
                ...state,
                counter: state.counter + 1
            }
    case 'DECREMENT':
        return {
            ...state,
            counter: state.counter - 1
        }
    case 'ADD_FIVE':
        return {
            ...state,
            counter: state.counter + action.val
        }
    case 'SUB_FIVE':
        return {
            ...state,
            counter: state.counter - action.val
        }
    case 'STORE_RESULT':
        return {
            ...state,
            result: state.result.concat({id: new Date(), value: state.counter })
        } 
     case 'DELETE_RESULT':
     const newArray = state.result.filter(result => result.id !== action.ElementId);
         return {
             ...state,
             result: newArray
         }
    }
    return state;
}

export default reducer;