export default function(
  state = {
    lista: [],
    userLog:false},
     action) {
    switch (action.type) {
      case 'LIST_USERS':
        console.log("LIST_USERS")
        console.log(action.payload)
        return {...state, lista: action.payload};
      case 'valida_usuario_login': 
        console.log("valida_usuario_login")
        console.log(action.payload)
        //return {...state, userLog: action.payload};
        return {...state, userLog: action.payload}; 
      default:
        return state;
    }
  }
 