import React from 'react';
import { Icon, Menu } from 'semantic-ui-react';
import firebase from '../../shared/firebase';
import { withRouter } from 'react-router-dom';

const AppBar = ({ history }) => (
    <Menu fixed='top' inverted borderless>
        <Menu.Item header style={{ fontFamily: 'Amatic SC', fontSize: '26px' }}>
            <Icon name='book' />
            Family Reading Blog
            </Menu.Item>
        <div style={{ display: 'flex', flexFlow: 'row nowrap' }}>
            <Menu.Item as='a' onClick={() => history.push('/landing')}>Books</Menu.Item>
            <Menu.Item as='a' onClick={() => firebase.auth().signOut()}>Logout</Menu.Item>
        </div>
    </Menu>
);

export default withRouter(AppBar);