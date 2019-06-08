

import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';

 class FrmChat extends Component {

  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://hypescience.com/wp-content/uploads/2013/12/sucesso.jpg' }}/>
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Testando aqui </Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>

            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://scontent.frec6-1.fna.fbcdn.net/v/t1.0-9/13095812_996907880390517_6970701338681906111_n.jpg?_nc_cat=110&_nc_oc=AQmydB06oXSUfIZhhMmbGb2mtzg87-gUet9qZnUlFPYg1o-t1QPeAiKx6uUIO0Cc-LA&_nc_ht=scontent.frec6-1.fna&oh=d66a74e174e0f30e8ba62a83b79d7a0e&oe=5D8921A9' }}/>
              </Left>
              <Body>
                <Text>Marlon Lira</Text>
                <Text note>Testando</Text>
              </Body>
              <Right>
                <Text note>3:44 pm</Text>
              </Right>
            </ListItem>

            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://scontent.frec6-1.fna.fbcdn.net/v/t1.0-9/52871871_2124201561008768_999766166287155200_n.jpg?_nc_cat=107&_nc_oc=AQnO_ol1oE1HAqj7-74Cioa-9xR1yW1PAuzSoEfjjFVneVMiNaQqqcS_ktWza9DlyGg&_nc_ht=scontent.frec6-1.fna&oh=53b4a2a5993239ef4ded4c46ad572b6c&oe=5D9AC7F4' }}/>
              </Left>
              <Body>
                <Text>Manoelly Bernado</Text>
                <Text note>Testando 3</Text>
              </Body>
              <Right>
                <Text note>3:45 pm</Text>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  email: state.AutenticacaoReducer.email,
  pass: state.AutenticacaoReducer.pass
});

export default connect(mapStateToProps, null)(FrmChat);
