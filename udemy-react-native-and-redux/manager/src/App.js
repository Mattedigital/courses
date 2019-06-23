import React,  { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const firebaseConfig = {
      apiKey: "AIzaSyDt3gpRjzv82ilSAekBKXiktVqV2n3TAEI",
      authDomain: "udemy-react-native-manag-7520d.firebaseapp.com",
      databaseURL: "https://udemy-react-native-manag-7520d.firebaseio.com",
      projectId: "udemy-react-native-manag-7520d",
      storageBucket: "udemy-react-native-manag-7520d.appspot.com",
      messagingSenderId: "897676700489",
      appId: "1:897676700489:web:782f97555bdee349"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}

export default App;
