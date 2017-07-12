import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { 
  MODIFICA_EMAIL,
  MODIFICA_SENHA,
  MODIFICA_NOME,
  CADASTRA_USUARIO_SUCESSO,
  CADASTRA_USUARIO_ERRO
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
  return dispatch => {
    firebase.auth().createUserWithEmailAndPassword(email, senha)
    .then(user => cadastroUsuarioSucesso(dispatch))
    .catch(erro => cadastroUsuarioErro(erro, dispatch));
  };
};

const cadastroUsuarioSucesso = (dispatch) => {
  dispatch({ type: CADASTRA_USUARIO_SUCESSO });
  Actions.boasVindas();
};

const cadastroUsuarioErro = (erro, dispatch) => {
  dispatch({ type: CADASTRA_USUARIO_ERRO, payload: erro.message });
};
