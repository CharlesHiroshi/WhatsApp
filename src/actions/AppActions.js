import b64 from 'base-64';
import firebase from 'firebase';
import { 
  MODIFICA_ADICIONA_CONTATO_EMAIL, 
  ADICIONA_CONTATO_ERRO 
} from './types';

export const modificaAdicionaContatoEmail = texto => ({
    type: MODIFICA_ADICIONA_CONTATO_EMAIL,
    payload: texto
});

export const adicionaContato = email => dispatch => {
    const emailB64 = b64.encode(email);
    firebase.database().ref(`/contatos/${emailB64}`)
      .once('value')
      .then(snapshot => {
        console.log(snapshot.val());
        if (snapshot.val()) {
          console.log('Usuário existe');
        } else {
          dispatch(
            { type: ADICIONA_CONTATO_ERRO, 
              payload: 'E-mail informado não corresponde a um usuário válido!'
            }
          );
        }
    });
  };

// Aula 251 - 
// Adicionando contatos do usuário parte 3 - Tratando usuários inexistentes
