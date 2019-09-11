import { useState, useEffect } from 'react';
import firebase from '../shared/firebase';

export const useBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const unsubscribe = firebase
            .firestore()
            .collection('books')
            .onSnapshot(snapshot => {
                const books = snapshot.docs.map(book => ({
                    id: book.id,
                    ...book.data()
                }));

                setBooks(books);
            });

        return () => unsubscribe();
    }, []);

    return books;
};