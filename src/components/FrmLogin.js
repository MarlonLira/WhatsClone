import React from 'react';
import {View, Text, TextInput, Button, TouchableHighlight} from 'react-native';
import { Input } from 'react-native-elements';
import {Actions} from 'react-native-router-flux';
import Styles from '../styles/FrmLoginCss';

export default props = ({ navigation }) =>(
  <View style = {Styles.Container}>
    <View style={Styles.TopBox}>
      <Text style={Styles.TopText}> WhatsApp Clone</Text>
    </View>

    <View style={Styles.MidBox}>
      <Input style={Styles.MidInput} placeholder="E-mail"/>
      <Input style={Styles.MidInput} placeholder="Senha"/>

      <TouchableHighlight onPress={() => Actions.frmCadastro()}>
        <Text style={Styles.MidText}>Ainda não tem cadastro? Cadastre-se </Text>
      </TouchableHighlight>
    </View>

    <View style={Styles.DownBox}>
      <Button style={Styles.DownButton} color="#115E54" title="Acessar" onPress={() => false} />
    </View>
  </View>
);

props.navigationOptions = {
  title: 'Login',
}