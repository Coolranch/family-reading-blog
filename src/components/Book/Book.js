import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import { useBook } from '../../contexts/BookContext';

const Book = ({ book, history }) => {
    const { selectBook } = useBook();

    const bookClicked = () => {
        selectBook(book);
        history.push('/blog');
    };

    return (
        <Card onClick={bookClicked}>
            <Image src={book.image} wrapped ui={false} />
            <Card.Content>
                <Card.Header style={{
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                }} title={book.title}>
                    {book.title}
                </Card.Header>
                <Card.Meta>{book.author}</Card.Meta>
            </Card.Content>
        </Card>
    );
};

export default withRouter(Book);