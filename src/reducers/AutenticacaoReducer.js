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
} from '../actions/types';

const INITIAL_STATE = {
  nome: '',
  email: '',
  senha: '',
  erroCadastro: '',
  erroLogin: '',
  loading: false
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
      return { ...state, nome: '', senha: '', loading: false };
    case CADASTRA_USUARIO_ERRO:
      return { ...state, senha: '', erroCadastro: action.payload, loading: false };
    case LOGIN_USUARIO_SUCESSO:
      return { ...state, senha: '', loading: false };
    case LOGIN_USUARIO_ERRO:
      return { ...state, senha: '', erroLogin: action.payload, loading: false };
    case LOGIN_EM_ANDAMENTO:
      return { ...state, loading: true };
    case CADASTRO_EM_ANDAMENTO:
      return { ...state, loading: true };
    default:
      return state;
  }
};
