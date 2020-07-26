export default function(
    state = {
      lista: [] 
    }, action) {
      switch (action.type) {
        case 'LIST_VOTE':
          console.log("LIST_VOTE")  
          return {...state, lista: action.payload.data}; 
        default:
          return state;
      }
    }
   