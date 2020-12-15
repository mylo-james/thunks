import { useDispatch, useSelector } from 'react-redux';

import { getRandomCard } from './store/card';

function App() {
    const card = useSelector(({card}) => card);
    const dispatch = useDispatch();

    return (
        <div className='main'>
            <h2>Pick a card, any card</h2>
            <img alt='random' src={card.image} />
            <button onClick={() => dispatch(getRandomCard())}>
                Get Random Card
            </button>
        </div>
    );
}

export default App;
