import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './components/Sidebar';
import './App.scss';

const App = () => {
    return (
        <Sidebar />
    );
};

ReactDOM.render(<App />, document.getElementById('app'));