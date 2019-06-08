import firebase from 'firebase'

export const modifyEmail = (email) => {
  return{
    type: 'modify_email',
    payload: email
  }
}

export const modifyPass = (pass) => {
  return {
    type: 'modify_pass',
    payload: pass
  }
}

export const modifyName = (name) => {
  return {
    type: 'modify_name',
    payload: name
  }
}

export const userRegister = ({name, email, pass}, navigation) => {
  firebase.auth().createUserWithEmailAndPassword(email, pass)
    .then(user => {
        if(user){
          navigation.navigate('Login')
        }
      }
    )
    .catch(err => alert(err));
  return {
    type: 'register_user'
  }
}

export const userLogin = ({email, pass}, callSucess, callError) => {
  firebase.auth().signInWithEmailAndPassword(email, pass)
    .then( user => {
          if(user){
            callSucess(user);
          }
        }
      )
    .catch(err => callError(err));
  return {
    type: 'login_user'
  }
}