import React from 'react';
import Background from './Background';
import LoginForm from './LoginForm/LoginForm';

const Login = () => {
    return (
        <div style={{ position: 'relative' }}>
            <LoginForm />
            <Background />
        </div>
    );
};

export default Login;