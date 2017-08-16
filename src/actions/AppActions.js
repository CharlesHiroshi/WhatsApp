import b64 from 'base-64';
import firebase from 'firebase';
import _ from 'lodash';
import { 
  MODIFICA_ADICIONA_CONTATO_EMAIL, 
  ADICIONA_CONTATO_ERRO,
  ADICIONA_CONTATO_SUCESSO 
} from './types';

export const modificaAdicionaContatoEmail = texto => ({
    type: MODIFICA_ADICIONA_CONTATO_EMAIL,
    payload: texto
});

export const adicionaContato = email => dispatch => {
    const emailContatoB64 = b64.encode(email);
    firebase.database().ref(`/contatos/${emailContatoB64}`)
      .once('value')
      .then(snapshot => {
        console.log(snapshot.val());
        if (snapshot.val()) {
          const dadosContato = _.first(_.values(snapshot.val()));
          console.log(dadosContato);
          const { currentUser } = firebase.auth();
          const emailUsuarioB64 = b64.encode(currentUser.email);
          firebase.database().ref(`/usuario_contatos/${emailUsuarioB64}`)
            .push({ email, nome: dadosContato.nome })
            .then(() => adicionaContatoSucesso(dispatch))
            .catch(erro => adicionaContatoErro(erro.message, dispatch));
        } else {
          dispatch(
            { type: ADICIONA_CONTATO_ERRO, 
              payload: 'E-mail informado não corresponde a um usuário válido!'
            }
          );
        }
  });
};

const adicionaContatoErro = (erro, dispatch) => (
  dispatch(
    {
      type: ADICIONA_CONTATO_ERRO,
      payload: erro
    }
  )
);

const adicionaContatoSucesso = dispatch => (
  dispatch(
    {
      type: ADICIONA_CONTATO_SUCESSO
    }
  )
);
