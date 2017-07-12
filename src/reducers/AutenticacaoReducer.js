import { 
  MODIFICA_EMAIL,
  MODIFICA_SENHA
} from '../actions/types';

const INITIAL_STATE = {
  nome: 'Charles Hiroshi',
  email: 'charles@teste.com',
  senha: '123123'
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MODIFICA_EMAIL:
      return { ...state, email: action.payload };
    case MODIFICA_SENHA:
      return { ...state, senha: action.payload };
    default:
      return state;
  }
};
