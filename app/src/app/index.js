import React from 'react'
import Image from './children/image'
import UserBlock from './children/user_block';
import CommentsBlock from './children/comments_block';
import PostInteractionBlock from './children/post_interaction_block';
import styles from './styles'

const App = (props) => {
  const { data } = props
  return (
    <main style={styles.main}>
      <div style={styles.image}>
        <Image data={data} />
      </div>
      <div style={styles.text}>
        <div style={styles.postInfoWrapper}>
          <UserBlock/>
          <CommentsBlock/>
          <PostInteractionBlock/>
        </div>
      </div>
    </main>
  )
}

export default App
