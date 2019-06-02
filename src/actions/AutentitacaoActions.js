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

export const cadastraUsuario = ({name, email, pass}) => {

  alert(name + ' /' + email + '/' + pass);
  return {
    type: 'teste'
  }
}