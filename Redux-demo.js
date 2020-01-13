const redux = require('redux');
const createStore = redux.createStore;

// state
const initialState = {
     count : 0
}

//reducer
const rootReducer = (state = initialState, action) => {
    if(action.type === 'Add_counter') {
       return { 
           ...state,
            count:state.count + action.value 
        };
   }
   return state;
}

//store
const store = createStore(rootReducer);
console.log(store.getState());

//subscribe
store.subscribe(() => {
console.log('[Subscription]', store.getState());
});

//dispatch
store.dispatch({type: 'Add_counter', value: 10});
console.log(store.getState());