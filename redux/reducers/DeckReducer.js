export default function DeckReducer(state = {}, action) {
    switch(action.type) {
        case 'ADD_DECK':
            return {
                ...state,
                [action.payload.id]: action.payload
            }
        case 'DELETE_DECK':
            const tmpState = state;
            tmpState[action.payload] = null;
            delete tmpState[action.payload];
            return {
                ...tmpState
            }

        case 'ADD_CARD':
            const newC = state[action.payload.id].cards;
            return {
                ...state,
                [action.payload.id]: {
                    ...state[action.payload.id],
                    cards: {
                        ...newC,
                        [action.payload.card.id] : action.payload.card
                    }
                }
            } 
        case 'UPDATE_CARD_STATE':
            return {
                ...state,
                [action.payload.deckId] : {
                    ...state[action.payload.deckId],
                    cards: {
                        ...state[action.payload.deckId].cards,
                        [action.payload.cardId]: {
                            ...state[action.payload.deckId].cards[action.payload.cardId],
                            flip: action.payload.flip
                        }
                    }
                }
            }
        case 'INC_CTR':
            return {
                ...state,
                [action.payload] : {
                    ...state[action.payload],
                    correct: state[action.payload].correct + 1
                }
            }
        case 'RESET_CTR': 
            return {
                ...state,
                [action.payload] : {
                    ...state[action.payload],
                    correct: 0
                }
            }
        default: 
        return {...state};
    }
}