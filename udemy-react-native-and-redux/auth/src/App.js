import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = {
    loggedIn: null,
  }
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyCf0Rl48an9k3XiqMdxSkYUs_pYFWeC1q0",
      authDomain: "udemy-react-native-auth-96079.firebaseapp.com",
      databaseURL: "https://udemy-react-native-auth-96079.firebaseio.com",
      projectId: "udemy-react-native-auth-96079",
      storageBucket: "udemy-react-native-auth-96079.appspot.com",
      messagingSenderId: "15243064799",
      appId: "1:15243064799:web:d5b5ad3bcca6c3b7"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
      console.log('logged in method? ', this.state.loggedIn);
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.state.loggedIn ?
          <Button onPress={() => firebase.auth().signOut()}>Log out</Button>
          : <LoginForm />}
      </View>
    )
  }
}

export default App;
