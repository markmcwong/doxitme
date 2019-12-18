import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducers from './Store/Reducers/rootReducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import { checkCurrentUser } from './Store/action/checkCurrentUserAction';
import {fetchBlog} from "./Store/action/fetchBlog";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__/*({"trace": true})*/ || compose;

const store = createStore(
	rootReducers,
	composeEnhancer(applyMiddleware(thunk))
)
store.dispatch(fetchBlog())
store.dispatch(checkCurrentUser())
ReactDOM.render(
	<Provider store={store}><App store={store}/></Provider>,
	document.getElementById('root')
)

