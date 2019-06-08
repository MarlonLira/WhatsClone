import { createAppContainer, createStackNavigator } from 'react-navigation';

import FrmLogin from './components/FrmLogin';
import FrmCadastro from './components/FrmCadastro';
import FrmInicio from './components/FrmInicio';
import FrmHome from './components/FrmHome';
import FrmChat from './components/FrmChat';

export default props = createAppContainer(
  createStackNavigator({
    Login: FrmLogin,
    Cadastro: FrmCadastro,
    Inicio: FrmInicio,
    Home: FrmHome,
    Chat: FrmChat,
    
  })
);

