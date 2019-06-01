import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import Styles from '../styles/FrmCadastroCss'
import { Input } from 'react-native-elements';

export default props = ({ navigation }) =>(
  <View style = {Styles.Container}>

    <View style={Styles.TopBox}>
      <TextInput style={Styles.TopInput} placeholder="Nome" underlineColorAndroid="green"/>
      <TextInput style={Styles.TopInput} placeholder="E-mail" underlineColorAndroid="green"/>
      <TextInput style={Styles.TopInput} placeholder="Senha" underlineColorAndroid="green"/>
    </View>

    <View style={Styles.DownBox}>
      <Button style={Styles.DownButton} color="#115E54" title="Cadastrar" onPress={() => false} />
    </View>
  </View>
);

props.navigationOptions = {
  title: 'Cadastro',
}