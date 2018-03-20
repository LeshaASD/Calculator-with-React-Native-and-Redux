import React, {Component} from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Calculator from "./src/containers/Calculator";
import reducer from "./src/store/reducer/reducer";


const store = createStore(reducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
            <Calculator/>
      </Provider>
    );
  }
}

