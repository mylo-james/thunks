import { useDispatch, useSelector } from 'react-redux';
/*************  TO DO #5 ******************/
import { getRandomCard } from './store/card';
/*************  TO DO #7 ******************/


function App() {
    const card = useSelector(({ card }) => card);
    const dispatch = useDispatch();

    /*************  TO DO #7 ******************/
    

    return (
        <div className='main'>
            <h2>Pick a card, any card</h2>
            <img alt='random' src={card.image} />
            {/*************  TO DO #6 ******************/}
            <button onClick={() => dispatch(getRandomCard())}>
                Get Random Card
            </button>
        </div>
    );
}

export default App;
