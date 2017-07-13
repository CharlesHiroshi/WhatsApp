import { 
  MODIFICA_EMAIL,
  MODIFICA_SENHA,
  MODIFICA_NOME,
  CADASTRA_USUARIO_SUCESSO,
  CADASTRA_USUARIO_ERRO,
  LOGIN_USUARIO_SUCESSO,
  LOGIN_USUARIO_ERRO,
  LOGIN_EM_ANDAMENTO
} from '../actions/types';

const INITIAL_STATE = {
  nome: '',
  email: '',
  senha: '',
  erroCadastro: '',
  erroLogin: '',
  loading_login: false
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
      return { ...state, senha: '' };
    case LOGIN_USUARIO_ERRO:
      return { ...state, erroLogin: action.payload, loading_login: false };
    case LOGIN_EM_ANDAMENTO:
      return { ...state, loading_login: true };
    default:
      return state;
  }
};
