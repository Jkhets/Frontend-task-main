import React, {useState} from 'react';
import styles from '../comments_block/styles';
import CommentUnliked from '../like_button/children/unliked_icon/CommentUnliked';
import CommentLiked from '../like_button/children/liked_icon/CommentLiked';


const Comment = (props) => {
    const [isLiked,setIsLiked] = useState(false);

    const handleLikeChange = () => {
        setIsLiked(!isLiked)
    }

    return (
        
            <div style={styles.commentWrapper}>
                <div>
                <p style={styles.comment}><b>{props.username}</b> {props.comment}</p>
                </div>
                <div style={styles.likeButton} onClick={handleLikeChange}>
                { isLiked ? <CommentLiked/> : <CommentUnliked/> }
                </div>
            </div>

    )
}

export default Comment;