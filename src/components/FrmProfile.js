import React, {Component} from 'react';
import {Container, Content, List, ListItem, InputGroup, Input, Icon, Text, Picker, Button} from 'native-base';
import {connect} from 'react-redux';
const Item = Picker.Item;

import { modifyEmail, modifyPass, userLogin } from '../actions/AutentitacaoActions';

class FrmProfile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedItem: undefined,
      selected1: 'key0',
      results: {
          items: [],
      },
    };
  }
  onValueChange(value) {
      this.setState({
          selected1: value,
      });
  }
  render() {
      return (
        <Container>
          <Content>
              <List>
                  <ListItem>
                      <InputGroup>
                          <Input inlineLabel label="First Name" placeholder="Nome" />
                      </InputGroup>
                  </ListItem>
              
                  <ListItem>
                      <InputGroup>
                          <Icon name="ios-person" style={{ color: '#0A69FE' }} />
                          <Input placeholder="EMAIL" />
                      </InputGroup>
                  </ListItem>
                  <ListItem>
                      <InputGroup>
                          <Icon name="ios-unlock" style={{ color: '#0A69FE' }} />
                          <Input placeholder="Senha" secureTextEntry />
                      </InputGroup>
                  </ListItem>
                  <ListItem>
                      <InputGroup>
                          <Icon name="ios-call" style={{ color: '#0A69FE' }} />
                          <Input placeholder="PHONE" keyboardType="numeric" />
                      </InputGroup>
                  </ListItem>

                  <ListItem iconLeft>
                      <Icon name="ios-transgender" style={{ color: '#0A69FE' }} />
                      <Text>GENDER</Text>
                      <Picker
                        iosHeader="Select one"
                        mode="dropdown"
                        selectedValue={this.state.selected1}
                        onValueChange={this.onValueChange.bind(this)} >
                          <Item label="Male" value="key0" />
                          <Item label="Female" value="key1" />
                          <Item label="Other" value="key2" />
                      </Picker>
                  </ListItem>
              
                  <ListItem>
                      <InputGroup >
                          <Input stackedLabel label="Permanent Address" placeholder="Address" />
                      </InputGroup>
                  </ListItem>
              </List>
              <Button style={{ alignSelf: 'center', marginTop: 20, marginBottom: 20 }}>
                  <Text>Sign Up</Text>
              </Button>
          </Content>
        </Container>
      );
  }
}

FrmProfile.navigationOptions = {
  title: 'Perfil',
}

const mapStateToProps = state => ({
  email: state.AutenticacaoReducer.email,
  pass: state.AutenticacaoReducer.pass
});

export default connect(mapStateToProps, {modifyEmail, modifyPass, userLogin})(FrmProfile);