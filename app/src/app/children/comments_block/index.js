import React from 'react';
import Comment from './comment';
import styles from '../comments_block/styles';
import DUMMY_COMMENTS from './DUMMY_COMMENTS';

const CommentsBlock = () => {
    const commentsList = DUMMY_COMMENTS.map((comment) => (
        <Comment
          id={comment.id}
          username={comment.username}
          comment={comment.comment}
        />
    ));

    return (
        <div style={styles.commentBlockWrapper}>
            {commentsList}
        </div>
    )
}

export default CommentsBlock;