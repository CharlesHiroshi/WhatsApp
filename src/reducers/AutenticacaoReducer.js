import { 
  MODIFICA_EMAIL,
  MODIFICA_SENHA,
  MODIFICA_NOME,
  CADASTRA_USUARIO_SUCESSO,
  CADASTRA_USUARIO_ERRO,
  LOGIN_USUARIO_SUCESSO,
  LOGIN_USUARIO_ERRO
} from '../actions/types';

const INITIAL_STATE = {
  nome: '',
  email: '',
  senha: '',
  erroCadastro: ''
};

export default (state = INITIAL_STATE, action) => {
  console.log(action.type);
  switch (action.type) {
    case MODIFICA_EMAIL:
      return { ...state, email: action.payload };
    case MODIFICA_SENHA:
      return { ...state, senha: action.payload };
    case MODIFICA_NOME:
      return { ...state, nome: action.payload };
    case CADASTRA_USUARIO_SUCESSO:
      return { ...state, nome: '', senha: '' };
    case CADASTRA_USUARIO_ERRO:
      return { ...state, erroCadastro: action.payload };
    case LOGIN_USUARIO_SUCESSO:
      return { ...state, nome: '', senha: '' };
    case LOGIN_USUARIO_ERRO:
      return { ...state, erroCadastro: action.payload };
    default:
      return state;
  }
};
