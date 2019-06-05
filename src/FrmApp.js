import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import firebase from 'firebase';

import Routes from './Routes';
import reducers from './reducers/index';

class FrmApp extends Component{
  
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
    return(
      <Provider store={createStore(reducers)}>
        <Routes/>
      </Provider>
    );
  }
}

export default FrmApp;