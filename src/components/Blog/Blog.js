import React from 'react';
import { Comment, Grid } from 'semantic-ui-react';
import { useBook } from '../../contexts/BookContext';
import Book from '../Book/Book';

const Blog = () => {
    const { selectedBook } = useBook();

    console.log('date:  ', new Date().toISOString());

    return (
        <Grid centered style={{ marginTop: '100px' }}>
            <Grid.Row>
                <Grid.Column width={4} style={{ display: 'flex', justifyContent: 'center' }}>
                    {selectedBook && <Book book={selectedBook} />}
                </Grid.Column>
                <Grid.Column width={4}>
                    <Comment.Group>
                        {selectedBook && selectedBook.comments.map(comment => (
                            <Comment>
                                <Comment.Content>
                                    <Comment.Avatar src={comment.avatar} style={{ margin: '0px 5px 0px 0px' }} />
                                    <div style={{ display: 'flex', flexFlow: 'row nowrap', alignItems: 'center' }}>
                                        <Comment.Author>{comment.user}</Comment.Author>
                                        <Comment.Metadata>{comment.timestamp}</Comment.Metadata>
                                    </div>
                                    <Comment.Text>{comment.comment}</Comment.Text>
                                    <Comment.Actions>
                                        <Comment.Action style={{ marginLeft: '40px' }}>Reply</Comment.Action>
                                    </Comment.Actions>
                                </Comment.Content>
                            </Comment>
                        ))}
                    </Comment.Group>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
};

export default Blog;