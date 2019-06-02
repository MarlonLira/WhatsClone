import React,{Component} from 'react';
import {View, Text, TextInput, Button, ImageBackground} from 'react-native';
import { Input } from 'react-native-elements';
import { connect } from 'react-redux';

import Styles from '../styles/FrmCadastroCss';
import { modifyEmail, modifyPass, modifyName, cadastraUsuario } from '../actions/AutentitacaoActions';

class FrmCadastro extends Component {

  componentDidMount(){
    const { navigation } = props;
  }

  _cadastraUsuario(){
    const  {name, email, pass} = this.props;
    
    this.props.cadastraUsuario({name, email, pass});
  }

  render(){
    return(
      <ImageBackground style={Styles.BgImage} source={require('../img/bg.png')}>
        <View style = {Styles.Container}>
          <View style={Styles.TopBox}>
  
            <TextInput
              value={this.props.name} 
              style={Styles.TopInput} 
              placeholder="Nome" 
              placeholderTextColor='#fff' 
              underlineColorAndroid="white" 
              onChangeText={name => this.props.modifyName(name)}
            />
  
            <TextInput
              value={this.props.email} 
              style={Styles.TopInput} 
              placeholder="E-mail"
              placeholderTextColor='#fff' 
              underlineColorAndroid="white" 
              onChangeText={email => this.props.modifyEmail(email)}
            />
  
            <TextInput
              secureTextEntry 
              value={this.props.pass} 
              style={Styles.TopInput}
              placeholder="Senha" 
              placeholderTextColor='#fff' 
              underlineColorAndroid="white" 
              onChangeText={pass => this.props.modifyPass(pass)}
            />
          </View>
  
          <View style={Styles.DownBox}>
            <Button style={Styles.DownButton} color="#115E54" title="Cadastrar" onPress={() => this._cadastraUsuario()} />
          </View>
        </View>
      </ImageBackground>
    );

  }
}

FrmCadastro.navigationOptions = {
  title: 'Cadastro',
}

const mapStateToProps = state => ({
  name: state.AutenticacaoReducer.name,
  email: state.AutenticacaoReducer.email,
  pass: state.AutenticacaoReducer.pass
});

export default connect(mapStateToProps, {modifyEmail, modifyPass, modifyName, cadastraUsuario })(FrmCadastro);