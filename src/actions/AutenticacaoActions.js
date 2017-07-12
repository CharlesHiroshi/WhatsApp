import { 
  MODIFICA_EMAIL,
  MODIFICA_SENHA
} from './types';

export const modificaEmail = (texto) => ({
    type: MODIFICA_EMAIL,
    payload: texto
});

export const modificaSenha = (texto) => ({
    type: MODIFICA_SENHA,
    payload: texto
});
