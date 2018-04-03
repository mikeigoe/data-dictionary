import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import Docs from './components/docs/Docs';
import DocForm from './components/docs/DocForm';

import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div>
            <header className="App-header">
              <div>
                <img src={logo} className="App-logo" alt="logo" align="left"/>
                <h1 className="App-title">PAPERCLIP</h1>
              </div>
            </header>
          </div>
          <DocForm />
          <hr />
          <Docs />
        </div>
      </Provider>
    );
  }
}

export default App;
