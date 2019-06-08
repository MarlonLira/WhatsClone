import React, {Component} from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

import {connect} from 'react-redux';

 class FrmHome extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://scontent.frec6-1.fna.fbcdn.net/v/t1.0-9/13095812_996907880390517_6970701338681906111_n.jpg?_nc_cat=110&_nc_oc=AQmydB06oXSUfIZhhMmbGb2mtzg87-gUet9qZnUlFPYg1o-t1QPeAiKx6uUIO0Cc-LA&_nc_ht=scontent.frec6-1.fna&oh=d66a74e174e0f30e8ba62a83b79d7a0e&oe=5D8921A9'}} />
                <Body>
                  <Text>Marlon Lira</Text>
                  <Text note>Developer</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'https://fullsnackdeveloper.com/wp-content/uploads/2018/03/coffee-fullsnack-desktop.png'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>

          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://scontent.frec6-1.fna.fbcdn.net/v/t1.0-9/52871871_2124201561008768_999766166287155200_n.jpg?_nc_cat=107&_nc_oc=AQnO_ol1oE1HAqj7-74Cioa-9xR1yW1PAuzSoEfjjFVneVMiNaQqqcS_ktWza9DlyGg&_nc_ht=scontent.frec6-1.fna&oh=53b4a2a5993239ef4ded4c46ad572b6c&oe=5D9AC7F4'}} />
                <Body>
                  <Text>Manoelly Bernardo</Text>
                  <Text note>nutritionist</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'https://www.unilaborlaboratorio.com.br/imagens/informacoes/nutricionista-particular-02.jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>50</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>15</Text>
                </Button>
              </Body>
              <Right>
                <Text>23h ago</Text>
              </Right>
            </CardItem>
          </Card>

          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://scontent.frec6-1.fna.fbcdn.net/v/t1.0-9/13095812_996907880390517_6970701338681906111_n.jpg?_nc_cat=110&_nc_oc=AQmydB06oXSUfIZhhMmbGb2mtzg87-gUet9qZnUlFPYg1o-t1QPeAiKx6uUIO0Cc-LA&_nc_ht=scontent.frec6-1.fna&oh=d66a74e174e0f30e8ba62a83b79d7a0e&oe=5D8921A9'}} />
                <Body>
                  <Text>Marlon Lira</Text>
                  <Text note>Developer</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'http://inn.spb.ru/images/300/DSC100345643.jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>20</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>10</Text>
                </Button>
              </Body>
              <Right>
                <Text>23h ago</Text>
              </Right>
            </CardItem>
          </Card>
          
        </Content>
      </Container>
    );
  }
}

FrmHome.navigationOptions = {
  title: 'Home',
}

const mapStateToProps = state => ({
  email: state.AutenticacaoReducer.email,
  pass: state.AutenticacaoReducer.pass
});

export default connect(mapStateToProps, null)(FrmHome);