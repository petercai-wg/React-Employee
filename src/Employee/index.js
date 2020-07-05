import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';

import Selector from './Selector'


import { store } from "./store";




render(
  <Provider store={store}>  
    <Selector />
      {/* <SearchBar />
      <ShowList />  */}
  </Provider>,
  document.getElementById('app') );


 


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();