import React from 'react';
import HomePage from './components/HomePage';

export default function App () {
    const dispatch = useDispatch();

    return (
        <Switch>
            <Route path='/' exact>
                <HomePage />
            </Route>
        </Switch>
    );
};

export default App;