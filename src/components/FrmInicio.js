import React, {Component} from 'react';
import {View, Text, TextInput, Button, TouchableHighlight, ImageBackground} from 'react-native';
import { connect } from 'react-redux';
import { modifyEmail, modifyPass, userLogin } from '../actions/AutentitacaoActions';

import Styles from '../styles/FrmLoginCss';

class FrmInicio extends Component {

  componentDidMount(){
    const { navigation } = props;
  }

  render(){
    return(
      <ImageBackground style={Styles.BgImage} source={require('../img/bg.png')}>
        <View style={Styles.Container}>
          <View style={Styles.TopBox}>
            <Text style={Styles.TopText}> Inicio</Text>
          </View>

          <View style={Styles.DownBox}>
            <Button style={Styles.DownButton} color="#115E54" title="Sair" onPress={() => this.props.navigation.navigate('Login')} />
          </View>
        </View>
      </ImageBackground>
    );
  }
};

FrmInicio.navigationOptions = {
  title: 'Inicio',
}

const mapStateToProps = state => ({
   email: state.AutenticacaoReducer.email,
   pass: state.AutenticacaoReducer.pass
});

export default connect(mapStateToProps, {modifyEmail, modifyPass, userLogin})(FrmInicio);