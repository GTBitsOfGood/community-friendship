import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import DevTools from '../containers/Root/DevTools';
import reduxThunk from 'redux-thunk';

export function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(reduxThunk),
            DevTools.instrument()
        )
    );
}
