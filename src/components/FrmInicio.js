import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';

import Menu from './Common/Menu'

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

const mapStateToProps = state => ({
   email: state.AutenticacaoReducer.email,
   pass: state.AutenticacaoReducer.pass
});

export default connect(mapStateToProps, null)(FrmInicio);