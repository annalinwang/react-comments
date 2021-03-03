import React, { Component, useState } from 'react'
import Post from './Post'


const App = () => {
      /**
      const [posts, setPosts] = useState('')
      changeVote = () => {
      //... makes a copy of that value
      const postsCopy = [...posts, newPosts]
      //access posts through indexing
      newPosts[0].vote += 1
      setsPosts(newPosts)
    }
     */
    return (
      <div className="container">
        <Post/>
      </div>
    )
  }

export default App
  