import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider} from 'react-redux';
import './index.css';
import counterReducer from './store/reducer/counter';
import resultReducer from './store/reducer/result';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
const rootReducer = combineReducers ({
    ctr: counterReducer,
    res: resultReducer 
});
const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}> <App /> </Provider>, document.getElementById('root'));
registerServiceWorker();
