// Action Type Definitions
const SET_RANDOM_CARD = 'photos/SET_RANDOM_CARD';

//Action Creators
const setRandomCard = (payload) => ({
    type: SET_RANDOM_CARD,
    payload,
});

//Thunk Action Creators
export const getRandomCard = () => async (dispatch) => {
    const res = await fetch(
        'https://deckofcardsapi.com/api/deck/new/draw/?count=1'
    );
    const { cards } = await res.json();
    dispatch(setRandomCard(cards[0]));
};

// Define an intial state
const initState = {
    code: 'AH',
    image: 'https://deckofcardsapi.com/static/img/AH.png',
    images: {
        svg: 'https://deckofcardsapi.com/static/img/AH.svg',
        png: 'https://deckofcardsapi.com/static/img/AH.png',
    },
    value: 'ACE',
    suit: 'HEARTS',
};

//Reducer
const cardReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_RANDOM_CARD:
            return action.payload;
        default:
            return state;
    }
};

export default cardReducer;
