import React , { useState } from 'react';
import UnlikedIcon from '../like_button/children/unliked_icon';
import LikedIcon from '../like_button/children/liked_icon';
import styles from '../post_interaction_block/styles';

const PostInteractionBlock = () => {
    const [isLiked,setIsLiked] = useState(false);

    const handleLikeChange = () => {
        setIsLiked(!isLiked)
    }

    let numberOfLikes = '6,244 likes'
    let timestamp = '4 DAYS AGO'
    
    return (
        <div style={styles.postInteractionWrapper}>
            <div>
                <h4 style={styles.likes}>{numberOfLikes}</h4>
                <p style={styles.timestamp}>{timestamp}</p>
            </div>
            <div style={styles.likeButton} onClick={handleLikeChange}>
               { isLiked ?<LikedIcon/> : <UnlikedIcon/> }
            </div>
        </div>
    )
}

export default PostInteractionBlock;