import React from 'react';
import UserImage from './user_icon.png'
import styles from '../user_block/styles.js';

const UserBlock = () => {

    let userName = 'avfofficial'
    let location = 'Villa Park,England'

    return (
        <div style={styles.userBlockWrapper}>
            <div style={styles.userImage}>
            <img src={UserImage} width='50px' height='50px'/>
            </div>
            <div style={styles.userDetails}>
            <p style={styles.userName}>{userName}</p>
            <p style={styles.location}>{location}</p>
            </div>
        </div>
    )
};

export default UserBlock;