import { 
  MODIFICA_EMAIL,
  MODIFICA_SENHA,
  MODIFICA_NOME
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
