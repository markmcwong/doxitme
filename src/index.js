import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducers from './Store/Reducers/rootReducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import { fetchBlog } from './Store/action/fetchBlog';
import { LogInAc } from './Store/action/loginAction';


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	rootReducers,
	composeEnhancer(applyMiddleware(thunk))
)
store.dispatch(fetchBlog());
ReactDOM.render(
	<Provider store={store}><App /></Provider>,
	document.getElementById('root')
)

