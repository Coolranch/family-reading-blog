import React, { useEffect, useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import Logo from '../../../assets/logo.png';
import * as S from './LoginForm.styles';
import firebase from 'firebase/app';
import 'firebase/auth';

const LoginForm = () => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    });
    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        if (form.password.length < 8 || form.email.indexOf('@') < 0 || form.email.indexOf('.') < 0) {
            setDisabled(true);
        } else {
            setDisabled(false);
        }
    }, [form]);

    const textChanged = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const register = () => {
        firebase.auth().createUserWithEmailAndPassword(form.email, form.password)
            .then(res => {
                console.log('response:  ', res);
            })
            .catch(err => {
                console.log('error:  ', err);
            });
    };

    return (
        <S.LoginForm>
            <S.Logo src={Logo} alt='logo' />
            <Form style={{ width: '58%' }}>
                <Form.Field>
                    <label>Email</label>
                    <input type='email'
                        placeholder='Email'
                        name='email'
                        onChange={e => textChanged(e)} />
                </Form.Field>
                <Form.Field style={{ marginBottom: '25px' }}>
                    <label>Password</label>
                    <input type='password'
                        placeholder='Password'
                        name='password'
                        onChange={e => textChanged(e)} />
                </Form.Field>
                <S.ActionWrapper>
                    <Button primary disabled={disabled}>Login</Button>
                    <Button secondary disabled={disabled} onClick={register}>Register</Button>
                </S.ActionWrapper>
            </Form>
        </S.LoginForm>
    );
};

export default LoginForm;