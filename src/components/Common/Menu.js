import React, {Component} from 'react';
import { Container, Content, Text, Button, Footer, FooterTab, Icon, View} from 'native-base';

import FrmHome from '../FrmHome';
import FrmChat from '../FrmChat';
import FrmProfile from '../FrmProfile';
import Styles from '../../styles/FrmLoginCss';

class Menu extends Component {
  constructor(props){
    super(props);

    this.state  = {
      IsActivity: 1,
      IsActivityHome: true, 
      IsColorHome: "black", 
      IsActivityCan: false,
      IsColorCan: "gray",  
      IsActivityNav: false,
      IsColorNav: "gray", 
      IsActivityContact: false,
      IsColorContact: "gray"
    };
  }
  

  _Onclick(Activity){

    switch(Activity){
      case "IsActivityHome":{
        this.setState({IsActivityHome : true, IsColorHome: "black"});
        this.setState({IsActivityCan : false, IsColorCan: "gray"});
        this.setState({IsActivityNav : false, IsColorNav: "gray"});
        this.setState({IsActivityContact : false, IsColorContact: "gray"});
        this.setState({IsActivity: 1});
        break;
      }
      case "IsActivityCan":{
        this.setState({IsActivityHome : false, IsColorHome: "gray"});
        this.setState({IsActivityCan : true, IsColorCan: "black"});
        this.setState({IsActivityNav : false, IsColorNav: "gray"});
        this.setState({IsActivityContact : false, IsColorContact: "gray"});
        this.setState({IsActivity: 2});
        break;
      }
      case "IsActivityNav":{
        this.setState({IsActivityHome : false, IsColorHome: "gray"});
        this.setState({IsActivityCan : false, IsColorCan: "gray"});
        this.setState({IsActivityNav : true, IsColorNav: "black"});
        this.setState({IsActivityContact : false, IsColorContact: "gray"});
        this.setState({IsActivity: 3});
        break;
      }
      case "IsActivityContact":{
        this.setState({IsActivityHome : false, IsColorHome: "gray"});
        this.setState({IsActivityCan : false, IsColorCan: "gray"});
        this.setState({IsActivityNav : false, IsColorNav: "gray"});
        this.setState({IsActivityContact : true, IsColorContact: "black"});
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
    const {
      IsActivityHome,
      IsColorHome, 
      IsActivityCan,
      IsColorCan, 
      IsActivityNav,
      IsColorNav, 
      IsActivityContact,
      IsColorContact
    } = this.state; 

    return (
      <Container>        
        <Content style={Styles.Container}>          
          {this.renderElement()}
        </Content>
        
        <Footer >
          <FooterTab style={{backgroundColor: "white"}}>
            <Button style={{backgroundColor: "white"}} vertical onPress={ () => this._Onclick("IsActivityHome")} active ={IsActivityHome}>
              <Icon name="navigate" style={{ color: IsColorHome }} />
            </Button>
            <Button style={{backgroundColor: "white"}} vertical onPress={() => this._Onclick("IsActivityCan")} active ={IsActivityCan}>
              <Icon name="camera" style={{ color: IsColorCan }}/>
            </Button>
            <Button  style={{backgroundColor: "white"}} vertical onPress={() => this._Onclick("IsActivityNav")} active ={IsActivityNav}>
              <Icon active name="apps" style={{ color: IsColorNav }} />
            </Button>
            <Button style={{backgroundColor: "white"}} vertical onPress={() => this._Onclick("IsActivityContact")} active ={IsActivityContact}>
              <Icon name="person" style={{ color: IsColorContact }}/>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
};

export default Menu;