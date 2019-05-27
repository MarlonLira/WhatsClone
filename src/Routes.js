import React from 'react';
import {Router, Scene, Stack} from 'react-native-router-flux';
import FrmLogin from './components/FrmLogin';
import FrmCadastro from './components/FrmCadastro';
import { createAppContainer, createStackNavigator, createBottomTabNavigator } from 'react-navigation';

/*export default props => (
  
  /*<Router>
    <Stack key='root'>
      <Scene key='frmLogin' component={FrmLogin} title="Login"/>
      <Scene key='frmCadastro' component={FrmCadastro} title="Cadastro"/>
    </Stack>
  </Router>
);*/


export default Routes = createAppContainer(
  createBottomTabNavigator({
    Login: FrmLogin,
    Cadastro: FrmCadastro,
  })
);

