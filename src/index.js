import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';

const AppRoot = (
    <Router>
        <UserProvider>
            <App />
        </UserProvider>
    </Router>
);

ReactDOM.render(AppRoot, document.getElementById('root'));
