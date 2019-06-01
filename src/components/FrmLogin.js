import React from 'react';
import {View, Text, TextInput, Button, TouchableHighlight} from 'react-native';
import { Input } from 'react-native-elements';
import { connect } from 'react-redux';

import Styles from '../styles/FrmLoginCss';

const FrmLogin = (props) => {
  const { navigation } = props;

  return(
  <View style = {Styles.Container}>
    <View style={Styles.TopBox}>
      <Text style={Styles.TopText}> WhatsApp Clone</Text>
    </View>

    <View style={Styles.MidBox}>
      <TextInput value={props.email} style={Styles.MidInput} placeholder="E-mail" underlineColorAndroid="green"/>
      <TextInput value={props.senha} style={Styles.MidInput} placeholder="Senha" underlineColorAndroid="green"/>
      
      <TouchableHighlight onPress={() => navigation.navigate('Cadastro')}>
        <Text style={Styles.MidText}>Ainda não tem cadastro? Cadastre-se</Text>
      </TouchableHighlight>
    </View>

    <View style={Styles.DownBox}>
      <Button style={Styles.DownButton} color="#115E54" title="Acessar" onPress={() => false} />
    </View>
  </View>
)};

FrmLogin.navigationOptions = {
  title: 'Login',
}

const mapStateToProps = state => ({
   email: state.AutenticacaoReducer.email,
   senha: state.AutenticacaoReducer.senha
});

export default connect(mapStateToProps, null)(FrmLogin);