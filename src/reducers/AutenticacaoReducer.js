const INITAL_STATE = {
  name: '',
  email: '',
  pass: ''
}

export default (state = INITAL_STATE, action) => {
  if(action.type == 'modify_email'){
    return {...state, email: action.payload}
  }
  if(action.type == 'modify_pass'){
    return {...state, pass: action.payload}
  }
  if(action.type == 'modify_name'){
    return {...state, name: action.payload}
  }
  return state;
}