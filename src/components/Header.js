import { useSelector } from 'react-redux';
import classes from './Header.module.css';
import { useDispatch } from 'react-redux';
import { authAction } from '../store';

const Header = () => {
    const dispatch = useDispatch();

    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

    const logoutHandler = (event) => {
        dispatch(authAction.logout());
    };
    return (
        <header className={classes.header}>
            <h1>Redux Auth</h1>
            {isLoggedIn && (
                <nav>
                    <ul>
                        <li>
                            <a href='/'>My Products</a>
                        </li>
                        <li>
                            <a href='/'>My Sales</a>
                        </li>
                        <li>
                            <button onClick={logoutHandler}>Logout</button>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Header;
