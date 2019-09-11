import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Form, Header, Modal } from 'semantic-ui-react';
import firebase, { getErrorByCode } from '../../../shared/firebase';
import { LOGIN, REGISTER } from '../../../shared/constants';
import Logo from '../../../assets/logo.png';
import * as S from './LoginForm.styles';

const LoginForm = () => {
    const [form, setForm] = useState({
        email: '',
        firstName: '',
        password: ''
    });
    const [disabled, setDisabled] = useState(true);
    const [firebaseError, setFirebaseError] = useState('');
    const [authMode, setAuthMode] = useState(LOGIN);

    useEffect(() => {
        if (form.password.length < 8 ||
            form.email.indexOf('@') < 0 ||
            form.email.indexOf('.') < 0 ||
            (authMode === REGISTER && form.firstName === '')) {
            setDisabled(true);
        } else {
            setDisabled(false);
        }
    }, [authMode, form]);

    const textChanged = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const authenticate = () => {
        setFirebaseError('');

        authMode === REGISTER
            ? firebase.auth().createUserWithEmailAndPassword(form.email, form.password)
                .then(res => {
                    const user = firebase.auth().currentUser;

                    user.updateProfile({ displayName: form.firstName })
                        .then(() => {
                            // No errors
                        })
                        .catch(err => {
                            setFirebaseError(err.message);
                        });
                })
                .catch(err => {
                    setFirebaseError(getErrorByCode(err.code));
                })
            : firebase.auth().signInWithEmailAndPassword(form.email, form.password)
                .then(res => {
                    // No errors
                })
                .catch(err => {
                    setFirebaseError(getErrorByCode(err.code));
                })
    };

    return (
        <>
            <Modal centered
                size='tiny'
                open={firebaseError !== ''}>
                <Header icon='exclamation triangle'
                    content='Authentication Error' />
                <Modal.Content>{firebaseError}</Modal.Content>
                <Modal.Actions>
                    <Button primary
                        onClick={() => setFirebaseError('')}>
                        OK
                    </Button>
                </Modal.Actions>
            </Modal>
            <S.LoginForm>
                <S.Logo src={Logo} alt='logo' />
                <Form style={{ width: '58%', marginTop: authMode === REGISTER ? '0px' : '35px' }}>
                    {authMode === REGISTER && (
                        <Form.Field>
                            <label>First Name</label>
                            <input type='text'
                                placeholder='First Name'
                                name='firstName'
                                onChange={e => textChanged(e)} />
                        </Form.Field>
                    )}
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
                        <Button primary
                            disabled={disabled}
                            onClick={authenticate}>
                            Submit
                        </Button>
                        <Checkbox toggle
                            label='Register'
                            checked={authMode === REGISTER}
                            style={{ display: 'flex', alignItems: 'center' }}
                            onChange={(event, data) => setAuthMode(authMode === LOGIN ? REGISTER : LOGIN)} />
                    </S.ActionWrapper>
                </Form>
            </S.LoginForm>
        </>
    );
};

export default LoginForm;