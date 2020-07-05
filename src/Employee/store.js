import { createStore,  combineReducers, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

import rootReducer from './reducers'

import RestDataSource from './RestDataSource'


import  { loadEmployee } from  "./actions"


import { initalState} from './placeholderData'


export const store = createStore(rootReducer, initalState ,  applyMiddleware(thunk));


store.subscribe(() => {    console.log( store.getState());  });

//store.dispatch( loadEmployee() );
