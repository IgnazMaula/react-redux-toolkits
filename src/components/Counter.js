import classes from './Counter.module.css';
import { useSelector, connect, useDispatch } from 'react-redux/es/exports';
import { counterAction } from '../store';

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.count.counter);
    const showCounter = useSelector((state) => state.count.showCounter);

    const incrementHandler = () => {
        dispatch(counterAction.increment());
    };
    const increaseHandler = () => {
        dispatch(counterAction.increase(5));
    };
    const decrementHandler = () => {
        dispatch(counterAction.decrement());
    };
    const toggleCounterHandler = () => {
        dispatch(counterAction.toggle());
    };

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {showCounter && <div className={classes.value}>{counter}</div>}
            <div>
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={increaseHandler}>Increase by 5</button>
                <button onClick={decrementHandler}>Decrement</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;
