import React from 'react';
import FrmLogin from './components/FrmLogin';
import FrmCadastro from './components/FrmCadastro';
import { createAppContainer, createStackNavigator } from 'react-navigation';

export default props = createAppContainer(
  createStackNavigator({
    Login: FrmLogin,
    Cadastro: FrmCadastro,
  })
);

