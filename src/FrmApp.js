import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import firebase from 'firebase';
import { Font, AppLoading } from "expo";

import Routes from './Routes';
import reducers from './reducers/index';

class FrmApp extends Component{
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      Ionicons: require('@expo/vector-icons/vendor/react-native-vector-icons/Fonts/Ionicons.ttf'),
    });

    this.setState({ loading: false });
  }

  componentWillMount(){
      // Your web app's Firebase configuration
    let firebaseConfig = {
      apiKey: "AIzaSyDc-JFIU4r5Q37XTrEBLWoa22F7xQpYs5c",
      authDomain: "whatsapp-clone-9b1c4.firebaseapp.com",
      databaseURL: "https://whatsapp-clone-9b1c4.firebaseio.com",
      projectId: "whatsapp-clone-9b1c4",
      storageBucket: "whatsapp-clone-9b1c4.appspot.com",
      messagingSenderId: "273773098646",
      appId: "1:273773098646:web:0c05c8b192adb1c2"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
  render(){
    if (this.state.loading) {
      return(
        <Provider store={createStore(reducers)}>
          <AppLoading />
        </Provider>
      );
    }
    return(
      <Provider store={createStore(reducers)}>
        <Routes/>
      </Provider>
    );
  }
}

export default FrmApp;