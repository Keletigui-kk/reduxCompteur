const initialState = {
    compteur : 0
}

const reducer = (state = initialState, action) => {
    // les actions c'est ce que les composants vont lui envoyer pour dire fait ça ou ça au state
    // on fait une condition pour gerer les actions 
    if (action.type === 'INCREMENTE') {
        return {
            compteur : state.compteur + 1
        }
    }

    if (action.type === 'DECREMENTE') {
        return {
            compteur : state.compteur - 1
        }
    }
    
    return state;
}

export default reducer;