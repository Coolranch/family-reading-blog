import styled from '@emotion/styled';

export const ActionWrapper = styled('div')`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
`;

export const LoginForm = styled('div')`
    background-color: white;
    border-radius: 8px;
    width: 600px;
    height: 310px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    padding: 20px;
    display: flex;
    flex-flow: row nowrap;
`;

export const Logo = styled('img')`
    width: 230px !important;
    height: 230px;
    margin-right: 25px;
    margin-top: 20px;
`;