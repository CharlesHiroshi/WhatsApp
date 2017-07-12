import firebase from 'firebase';
import { 
  MODIFICA_EMAIL,
  MODIFICA_SENHA,
  MODIFICA_NOME,
  CADASTRA_USUARIO
} from './types';

export const modificaEmail = (texto) => ({
    type: MODIFICA_EMAIL,
    payload: texto
});

export const modificaSenha = (texto) => ({
    type: MODIFICA_SENHA,
    payload: texto
});

export const modificaNome = (texto) => ({
    type: MODIFICA_NOME,
    payload: texto
});

export const cadastraUsuario = ({ nome, email, senha }) => {
    firebase.auth().createUserWithEmailAndPassword(email, senha)
    .then(user => console.log(user))
    .catch(erro => console.log(erro));
    return {
        type: 'teste'
    };
};
