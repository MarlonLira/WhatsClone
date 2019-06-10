
<Container>
        <ImageBackground  style={Styles.BgImage} source={require('../img/bg4.png')}>
          <View style={Styles.TopBox}>
            
              <View>
                <Text style={Styles.TopText}> NewChat</Text>
              </View>

            <Content style={Styles.MidBox}>
              <Form>
                  <Item floatingLabel>
                    <Label>Email</Label>
                    <Input value={this.props.email} onChangeText={email => this.props.modifyEmail(email)}/>
                  </Item>

                  <Item floatingLabel last>
                    <Label>Senha</Label>
                    <Input secureTextEntry value={this.props.pass} onChangeText={pass => this.props.modifyPass(pass)}/>
                  </Item>

                  <TouchableHighlight onPress={() => this.props.navigation.navigate('Cadastro')}>
                    <Text style={Styles.MidText}>Ainda não tem cadastro? Cadastre-se</Text>
                  </TouchableHighlight>

                <View style={Styles.DownBox}>
                  <Button style={Styles.DownButton} 
                    title="Acessar"
                    onPress={() => {this.setState({loadingButton: true}); this._userLogin()}}  
                    loading={loadingButton}
                  />  

                </View>
              </Form>
            </Content>
          </View>
        </ImageBackground>
      </Container>