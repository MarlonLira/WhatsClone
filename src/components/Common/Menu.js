import React, {Component} from 'react';
import { Header,Container, Content, Text, Button, Footer, FooterTab, Icon} from 'native-base';

import FrmHome from '../FrmHome';
import FrmChat from '../FrmChat';
import FrmProfile from '../FrmProfile';
import Styles from '../../styles/FrmLoginCss';

class Menu extends Component {
  constructor(props){
    super(props);

    this.state  = {IsActivity: 1 , IsActivityHome: true, IsActivityCan: false, IsActivityNav: false, IsActivityContact: false};
  }

  _Onclick(Activity){

    switch(Activity){
      case "IsActivityHome":{
        this.setState({IsActivityHome : true});
        this.setState({IsActivityCan : false});
        this.setState({IsActivityNav : false});
        this.setState({IsActivityContact : false});
        this.setState({IsActivity: 1});
        break;
      }
      case "IsActivityCan":{
        this.setState({IsActivityHome : false});
        this.setState({IsActivityCan : true});
        this.setState({IsActivityNav : false});
        this.setState({IsActivityContact : false});
        this.setState({IsActivity: 2});
        break;
      }
      case "IsActivityNav":{
        this.setState({IsActivityHome : false});
        this.setState({IsActivityCan : false});
        this.setState({IsActivityNav : true});
        this.setState({IsActivityContact : false});
        this.setState({IsActivity: 3});
        break;
      }
      case "IsActivityContact":{
        this.setState({IsActivityHome : false});
        this.setState({IsActivityCan : false});
        this.setState({IsActivityNav : false});
        this.setState({IsActivityContact : true});
        this.setState({IsActivity: 4});
        break;
      }
    }
  }

  
  renderElement() {
    
    if (this.state.IsActivity === 1) {
      return <FrmHome />;
    } else if (this.state.IsActivity === 2) {
      
    } 
    else if (this.state.IsActivity === 3) {
      return <FrmChat/>;
    }else {
      return <FrmProfile/>;
    }
  }

  render() {
    const {IsActivityHome, IsActivityCan, IsActivityNav, IsActivityContact} = this.state; 
    return (
      <Container>        
        <Content style={Styles.Container}>
          {this.renderElement()}
        </Content>
        
        <Footer>
          <FooterTab style={{backgroundColor: "white"}}>
            <Button vertical onPress={ () => this._Onclick("IsActivityHome")} active ={IsActivityHome}>
              <Icon name="navigate"/>
              <Text>Inicio</Text>
            </Button>
            <Button vertical onPress={() => this._Onclick("IsActivityCan")} active ={IsActivityCan}>
              <Icon name="camera"/>
              <Text>Camera</Text>
            </Button>
            <Button vertical onPress={() => this._Onclick("IsActivityNav")} active ={IsActivityNav}>
              <Icon active name="apps" />
              <Text>Chat</Text>
            </Button>
            <Button vertical onPress={() => this._Onclick("IsActivityContact")} active ={IsActivityContact}>
              <Icon name="person" />
              <Text>Perfil</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
};

export default Menu;