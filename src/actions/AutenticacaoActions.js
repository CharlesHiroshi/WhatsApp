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
    console.log(nome);
    return {
        type: 'teste'
    };
};
