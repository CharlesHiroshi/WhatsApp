import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import b64 from 'base-64';
import { 
  MODIFICA_EMAIL,
  MODIFICA_SENHA,
  MODIFICA_NOME,
  CADASTRA_USUARIO_SUCESSO,
  CADASTRA_USUARIO_ERRO,
  LOGIN_USUARIO_SUCESSO,
  LOGIN_USUARIO_ERRO,
  LOGIN_EM_ANDAMENTO,
  CADASTRO_EM_ANDAMENTO 
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

export const cadastraUsuario = ({ nome, email, senha }) => dispatch => {
  dispatch({ type: CADASTRO_EM_ANDAMENTO });
  firebase.auth().createUserWithEmailAndPassword(email, senha)
  .then(user => { 
    const emailB64 = b64.encode(email);
    firebase.database().ref(`/contatos/${emailB64}`)
    .push({ nome })
    .then(value => cadastroUsuarioSucesso(dispatch, value));
  })
  .catch(erro => cadastroUsuarioErro(dispatch, erro));
};

const cadastroUsuarioSucesso = (dispatch) => {
  dispatch({ type: CADASTRA_USUARIO_SUCESSO });
  Actions.boasVindas();
};

const cadastroUsuarioErro = (dispatch, erro) => {
  dispatch({ type: CADASTRA_USUARIO_ERRO, payload: erro.message });
};

export const autenticarUsuario = ({ email, senha }) => dispatch => {
  dispatch({ type: LOGIN_EM_ANDAMENTO });
  firebase.auth().signInWithEmailAndPassword(email, senha)
  .then(value => loginUsuarioSucesso(dispatch, value))
  .catch(erro => loginUsuarioErro(dispatch, erro));
};

const loginUsuarioSucesso = (dispatch) => {
  dispatch({ type: LOGIN_USUARIO_SUCESSO });
  Actions.principal();
};

const loginUsuarioErro = (dispatch, erro) => {
  dispatch({ type: LOGIN_USUARIO_ERRO, payload: erro.message });
};
