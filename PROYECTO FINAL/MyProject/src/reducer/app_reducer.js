export default function(
    state = {
      appName: 'Nombre para el curso de React Native'
    },
    action,
  ) {
    //Swith Case
    switch (action.type) {
      case 'Cambie_Nombre_Persona':
        return {...state, appName: action.payload};
      
      default:
        return state;
    }
  }
  