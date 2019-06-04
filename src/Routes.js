import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import FrmLogin from './components/FrmLogin';
import FrmCadastro from './components/FrmCadastro';
import FrmInicio from './components/FrmInicio';

export default props = createAppContainer(
  createStackNavigator({
    Login: FrmLogin,
    Cadastro: FrmCadastro,
    Inicio: FrmInicio,
  })
);

