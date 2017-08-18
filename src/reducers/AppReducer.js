import { 
  MODIFICA_ADICIONA_CONTATO_EMAIL, 
  ADICIONA_CONTATO_ERRO,
  ADICIONA_CONTATO_SUCESSO,
  MODIFICA_MENSAGEM
} from '../actions/types';

const INITIAL_STATE = {
  adiciona_contato_email: '',
  erro_adicionar_contato: '',
  adiciona_contato_sucesso: false,
  mensagem: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MODIFICA_ADICIONA_CONTATO_EMAIL:
      return { ...state, adiciona_contato_email: action.payload };
    case ADICIONA_CONTATO_ERRO:
      return { ...state, erro_adicionar_contato: action.payload };
    case ADICIONA_CONTATO_SUCESSO:
      return { 
        ...state, 
        adiciona_contato_sucesso: action.payload, 
        adiciona_contato_email: '' 
      };
    case MODIFICA_MENSAGEM:
      return { ...state, mensagem: action.payload };
    default:
      return state;
  }
};
