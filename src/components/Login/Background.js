import React from 'react';
import styled from '@emotion/styled';
import Books from '../../assets/many-old-books.jpg';

const Background = () => {
    const BackgroundImage = styled('div')`
        background-image: url(${Books});
        background-size: cover;
        width: 100vw;
        height: 100vh;
    `;

    return (
        <BackgroundImage />
    );
};

export default Background;