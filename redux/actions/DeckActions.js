export function addDeck(deck){
    return ({
        type:'ADD_DECK',
        payload: deck
    });
}

export function deleteDeck(deckID) {
    return ({
        type:'DELETE_DECK',
        payload: deckID
    });
}

export function addCard({deck, card}){
    return ({
        type:'ADD_CARD',
        payload: {id : deck, card}
    });
}
export function updateCard({deckId, cardId, flip}) {
    return ( {
        type : 'UPDATE_CARD_STATE',
        payload : {deckId, cardId, flip}
    })
}

export function incCounter(deckId) {
    return({
        type: 'INC_CTR',
        payload: deckId
    })
}

export function resetCounter(deckId) {
    return({
        type: 'RESET_CTR',
        payload: deckId
    })
}