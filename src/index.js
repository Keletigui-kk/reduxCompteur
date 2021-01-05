import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux';
import reducer from './Store/reducer';
import {Provider} from 'react-redux';  // Provider c'est celui qui apporte

// on cree un store qui va contenir tout le state
const store = createStore(reducer);   // c'est le reducer qui permet de modifier à chaque fois le state et envoyer le state modifié

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// Le provider va permettre d'injecter le state depuis notre store vers les composants
   
    

