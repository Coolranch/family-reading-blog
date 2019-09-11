import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router } from 'react-router-dom';

const AppRoot = (
    <Router>
        <App />
    </Router>
);

ReactDOM.render(AppRoot, document.getElementById('root'));
