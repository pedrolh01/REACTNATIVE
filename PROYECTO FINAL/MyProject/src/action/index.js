import axios from 'axios';
  
//setAppState({ loading: true });
export function cambiarNombreEnPersona(pname) {
  return {type: 'Cambie_Nombre_Persona', payload: pname};
}
//Function for get POSTS LIST
export function getPerson() {
  console.log('get posts');
  const datos = axios
    .get('http://theldz.com/asv/api/getPerson')
    .then(response => response.data);
  return {type: 'LIST_PERSON', payload: datos};
}
//Function for get POSTS LIST
export function getUser() {
  console.log('get users'); 
  const request = axios
    .get('http://theldz.com/asv/api/getPerson')
    .then(response => {  
      var datos = {
        datos:response.data,
        isFetch:true
      }
      return datos
      //return {type: 'LIST_USER', payload: 111};
    })  
    return {type: 'LIST_USER', payload: request};
}

export function getVote() {
  console.log('get vote');
  const datos = axios
    .get('http://theldz.com/asv/api/getVoteOption')
    .then(response => response.data);
    console.log(datos);
  return {type: 'LIST_VOTE', payload: datos};
}
