import { cards } from '../cards.json';
const randInt = () => Math.floor(Math.random() * cards.length);
// Action Type Definitions
const SET_RANDOM_CARD = 'cards/SET_RANDOM_CARD';

//Action Creators
export const setRandomCard = (payload) => ({
    type: SET_RANDOM_CARD,
    payload,
});

//Thunk Creators
/*************  TO DO #4 & #9 ******************/
export const getRandomCard = () => async (dispatch) => {
    // Can use params from first and second function
    // First is any params you need when you call the Thunk Creator
    // The second is always dispatch
    // Usually this is async if you want to fetch
    /* A Thunk Creator is a function that returns another function that 
    will eventually/hopefully dispatch an action. */
    console.log('HELLO FROM THUNK!!!!!!!!!!!');
    dispatch(setRandomCard(cards[randInt()]));
};

// Define an initial state
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
