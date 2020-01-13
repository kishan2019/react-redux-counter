import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider} from 'react-redux';
import './index.css';
import Reducer from './store/Reducer'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
const store = createStore(Reducer);

ReactDOM.render(<Provider store={store}> <App /> </Provider>, document.getElementById('root'));
registerServiceWorker();
