import React, {Component} from 'react';
import {View, Text, TextInput, TouchableHighlight, ImageBackground} from 'react-native';
import { connect } from 'react-redux';
import { modifyEmail, modifyPass, userLogin } from '../actions/AutentitacaoActions';
import { Input, Button, ThemeProvider } from 'react-native-elements';

import Styles from '../styles/FrmLoginCss';

class FrmLogin extends Component {
  constructor(props){
    super(props);

    this.state = {loadingButton : false};
  }
  _userLogin(){
    const { navigation } = this.props;
    const  { email, pass} = this.props;
    
    this.props.userLogin(
      {email, pass}, 
      () =>{
      this.setState({loadingButton: false});
      navigation.navigate('Inicio')
      }, 
      (err) => {
        this.setState({loadingButton: false});
        alert(err)
      }
    );
  }

  render(){
    const {loadingButton} = this.state; 
    return(
      <ImageBackground style={Styles.BgImage} source={require('../img/bg4.png')}>
        <View style={Styles.Container}>
          <View style={Styles.TopBox}>
            <Text style={Styles.TopText}> NewChat</Text>
          </View>

          <View style={Styles.MidBox}>

            <TextInput 
              value={this.props.email} 
              style={Styles.MidInput} 
              placeholder="E-mail" 
              placeholderTextColor='#fff' 
              underlineColorAndroid="white" 
              onChangeText={email => this.props.modifyEmail(email)}
            />

            <TextInput
              secureTextEntry
              value={this.props.pass} 
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
            <ThemeProvider>
              <Button style={Styles.DownButton} 
                title="Acessar"
                onPress={() => {this.setState({loadingButton: true}); this._userLogin()}}  
                loading={loadingButton}
              />
            </ThemeProvider>            
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