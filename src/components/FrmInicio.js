import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';

import Menu from './Common/Menu'

import { modifyEmail, modifyPass, userLogin } from '../actions/AutentitacaoActions';
import { Container, View } from 'native-base';


class FrmInicio extends Component {
  constructor(props){
    super(props);
  }

  render() {    
    return (
      <Container>
        <Menu/>
      </Container>
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