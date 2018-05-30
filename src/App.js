import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import './App.css';
import { store, persistor } from './redux/store'
import Main from './components/Main'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Main />
          </PersistGate>
        </Provider>
      </div>
    );
  }
}

export default App;
