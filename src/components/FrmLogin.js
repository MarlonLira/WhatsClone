import React, {Component} from 'react';
import {View, Text, TextInput, Button, TouchableHighlight, ImageBackground} from 'react-native';
import { connect } from 'react-redux';
import { modifyEmail, modifyPass, userLogin } from '../actions/AutentitacaoActions';

import Styles from '../styles/FrmLoginCss';

class FrmLogin extends Component {

  componentDidMount(){
    const { navigation } = props;
  }
  _userLogin(){
    const  { email, pass} = this.props;
    this.props.userLogin({email, pass}, this.props.navigation);
  }

  render(){
    return(
      <ImageBackground style={Styles.BgImage} source={require('../img/bg.png')}>
        <View style={Styles.Container}>
          <View style={Styles.TopBox}>
            <Text style={Styles.TopText}> WhatsApp Clone</Text>
          </View>

          <View style={Styles.MidBox}>

            <TextInput 
              value={props.email} 
              style={Styles.MidInput} 
              placeholder="E-mail" 
              placeholderTextColor='#fff' 
              underlineColorAndroid="white" 
              onChangeText={email => this.props.modifyEmail(email)}
            />

            <TextInput
              secureTextEntry
              value={props.pass} 
              style={Styles.MidInput} 
              placeholder="Senha" 
              placeholderTextColor='#fff' 
              underlineColorAndroid="white" 
              onChangeText={pass => this.props.modifyPass(pass)}
            />
            
            <TouchableHighlight onPress={() => this.props.navigation.navigate('Cadastro')}>
              <Text style={Styles.MidText}>Ainda não tem cadastro? Cadastre-se</Text>
            </TouchableHighlight>
          </View>

          <View style={Styles.DownBox}>
            <Button style={Styles.DownButton} color="#115E54" title="Acessar" onPress={() => this._userLogin()} />
          </View>
        </View>
      </ImageBackground>
    );
  }
};

FrmLogin.navigationOptions = {
  title: 'Login',
}

const mapStateToProps = state => ({
   email: state.AutenticacaoReducer.email,
   pass: state.AutenticacaoReducer.pass
});

export default connect(mapStateToProps, {modifyEmail, modifyPass, userLogin})(FrmLogin);