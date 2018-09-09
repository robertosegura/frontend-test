import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import EmailClientContainer from './components/containers/EmailClientContainer';
import './App.scss';

const store = createStore(rootReducer);

const App = () => {
    return (
        <Provider store={store}>
            <EmailClientContainer />
        </Provider>
    );
};

ReactDOM.render(<App />, document.getElementById('app'));