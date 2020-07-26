export default function(
  state = {
    lista: [],
    isFetch:false
  },
     action) {
    switch (action.type) {
      case 'LIST_USER': 
        console.log(action)
        console.log("LIST_USER")
        if(action.payload == null){
          return {...state, lista: null,isFetch:false};
        }else{
          return {...state, lista: action.payload.datos,isFetch:action.payload.isFetch};
        }
        
      default:
        return state;
    }
  }
 