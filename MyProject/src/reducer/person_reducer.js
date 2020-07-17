export default function(
  state = {
    lista: [],
    personaName: 'Nombre para el curso de React Native'
  }, action) {
    switch (action.type) {
      case 'LIST_PERSON':
        console.log("LIST_PERSON")  
        return {...state, lista: action.payload.data};
      case 'valida_usuario_login': 
        console.log("valida_usuario_login")
        console.log(action.payload)
        //return {...state, userLog: action.payload};
        return {...state, userLog: action.payload};
      case 'Cambie_Nombre_Persona':
        return {...state, personaName: action.payload}; 
      default:
        return state;
    }
  }
 