import React, { useContext, useState } from 'react';

const BookContext = React.createContext(null);

export const useBook = () => useContext(BookContext);

export const BookProvider = ({ children, book }) => {
    const [selectedBook, setSelectedBook] = useState(null);

    const selectBook = (book) => {
        setSelectedBook(book);
    };

    const value = {
        selectBook,
        selectedBook
    };

    return <BookContext.Provider value={value}>{children}</BookContext.Provider>
}