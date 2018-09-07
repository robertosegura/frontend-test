import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './components/Sidebar';
import MainArea from './components/MainArea';
import './App.scss';

const App = () => {
    return (
        <div className='container'>
            <Sidebar />
            <MainArea />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('app'));