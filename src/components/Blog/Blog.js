import React, { useEffect, useState } from 'react';
import { Button, Comment, Form, Grid } from 'semantic-ui-react';
import { useBook } from '../../contexts/BookContext';
import { useUser } from '../../contexts/UserContext';
import Book from '../Book/Book';
import firebase from '../../shared/firebase';

const Blog = () => {
    const { selectedBook } = useBook();
    const { firebaseUser } = useUser();
    const [comment, setComment] = useState('');
    const [blogComments, setBlogComments] = useState([]);

    useEffect(() => {
        let unsubscribe = function () { };

        if (selectedBook) {
            unsubscribe = firebase
                .firestore()
                .collection('books')
                .doc(selectedBook.id)
                .onSnapshot(snapshot => {
                    setBlogComments(snapshot.data().comments);
                });
        }

        return () => unsubscribe();
    }, [selectedBook]);

    const addComment = () => {
        const newComment = {
            avatar: firebaseUser.photoURL,
            comment,
            timestamp: new Date().toISOString(),
            user: firebaseUser.displayName
        };
        const comments = blogComments ? [...blogComments, newComment] : [newComment];

        firebase
            .firestore()
            .collection('books')
            .doc(selectedBook.id)
            .update({
                comments
            })
            .then(() => {
                setComment('');
            })
            .catch(err => {

            });
    };

    return (
        <Grid centered style={{ marginTop: '100px' }}>
            <Grid.Row>
                <Grid.Column width={4} style={{ display: 'flex', justifyContent: 'center' }}>
                    {selectedBook && <Book book={selectedBook} />}
                </Grid.Column>
                <Grid.Column width={4}>
                    <Comment.Group>
                        {blogComments && blogComments.map((comment, idx) => (
                            <Comment style={{ marginBottom: '10px' }} key={idx}>
                                <Comment.Content>
                                    <Comment.Avatar src={comment.avatar} style={{ margin: '0px 5px 0px 0px' }} />
                                    <div style={{ display: 'flex', flexFlow: 'row nowrap', alignItems: 'center' }}>
                                        <Comment.Author>{comment.user}</Comment.Author>
                                        <Comment.Metadata>{comment.timestamp}</Comment.Metadata>
                                    </div>
                                    <Comment.Text>{comment.comment}</Comment.Text>
                                </Comment.Content>
                            </Comment>
                        ))}
                    </Comment.Group>
                    <Form reply>
                        <Form.TextArea value={comment} onChange={e => setComment(e.target.value)} />
                        <Button content='Add Reply'
                            labelPosition='left'
                            icon='edit'
                            primary
                            onClick={addComment} />
                    </Form>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
};

export default Blog;