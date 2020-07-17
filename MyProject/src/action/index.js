import axios from 'axios';
 
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
  const datos = axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then(response => response.data);
    console.log(datos);
  return {type: 'LIST_USERS', payload: datos};
}
export function getVote() {
  console.log('get vote');
  const datos = axios
    .get('http://theldz.com/asv/api/getVoteOption')
    .then(response => response.data);
    console.log(datos);
  return {type: 'LIST_VOTE', payload: datos};
}
