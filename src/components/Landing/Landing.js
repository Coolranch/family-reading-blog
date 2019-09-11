import React from 'react';
import { List } from 'semantic-ui-react';
import { useBooks } from '../../hooks/useBooks';
import Book from '../Book/Book';

const Landing = () => {
    const books = useBooks();

    return (
        <List horizontal style={{ marginTop: '100px', marginLeft: '25px', marginRight: '25px' }}>
            {books.length > 0 && books.map(book => (
                <List.Item key={book.id}>
                    <Book book={book} />
                </List.Item>
            ))}
        </List>
    );
};

export default Landing;