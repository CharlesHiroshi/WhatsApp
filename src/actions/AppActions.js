import b64 from 'base-64';
import firebase from 'firebase';
import { MODIFICA_ADICIONA_CONTATO_EMAIL } from './types';

export const modificaAdicionaContatoEmail = texto => ({
    type: MODIFICA_ADICIONA_CONTATO_EMAIL,
    payload: texto
  });

export const adicionaContato = email => {
  const emailB64 = b64.encode(email);
  firebase.database().ref(`/contatos/${emailB64}`)
    .once('value')
    .then(snapshot => {
      console.log(snapshot.val());
      if (snapshot.val()) {
        console.log('Usuário existe');
      } else {
        console.log('Usuário não existe');
      }
    });
  return {
    type: ''
  };
};

// Aula 250 - Adicionando contatos do usuário parte 2
