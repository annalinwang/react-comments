import React, { useState, useEffect } from 'react'
import Voter from './Voter'
import Reply from './Reply.js'

const Post = () => {
    const [userNameInput, changeUserNameInput] = useState('')
    const [postInput, changePostInput] = useState('')
    const [posted, setPosted] = useState([])
    const [replyNameInput, setReplyNameInput] = useState('')
    const [replyTextInput, setReplyTextInput] = useState('')
    const [replies, setReplies] = useState([])
    

    const submit = e => {
        e.preventDefault()
        let post = {userNameInput, postInput, votes: 0, replies}
        changeUserNameInput('')
        changePostInput('')
        const newPosts = [ ... posted, post]
        setPosted(newPosts)
    }

    const submitReply = (e, post) => {
        e.preventDefault()
        let reply = [replyNameInput, replyTextInput]
        setReplyNameInput('')
        setReplyTextInput('')
        const newReplies = [ ... replies, reply]
        post.replies = newReplies
        setReplies(newReplies)
	}
    
    return (
        <>
        <br></br>
        <div className="shadow p-3 mb-5 bg-white rounded box">
            <form onSubmit = {submit}>
                <center>
                    <h2> <b>💭 New Post </b></h2>
                    <br></br>
                    <div className="form-group">
                        <textarea className="form-control"
                        value={userNameInput}
                        onChange={e=> changeUserNameInput(e.target.value)} 
                        type="text" 
                        id="name" 
                        placeholder="Name..."
                        rows="1"
                        />
                    </div>
                    <br></br>
                    <div className="form-group">
                        <textarea className="form-control" 
                        value={postInput}
                        onChange={e=> changePostInput(e.target.value)} 
                        type="text" 
                        id="post" 
                        placeholder="Write a Post..." 
                        rows="3" 
                        />
                    </div>
                    <br></br>
                    <button type="submit" className="btn btn-primary" 
                    disabled={postInput.trim().length === 0 || userNameInput.trim().length === 0} >Submit</button>
                </center>
            </form>
        </div>

        {posted.map(post => { 
            <li key={post.id}></li>
            return (
                <div className="shadow p-3 mb-5 bg-white rounded box">
                <p className="text-primary"><b>{post.userNameInput} </b> </p>
                <p> {post.postInput} </p>
                <Voter></Voter>

                {(post.replies).map((reply) => {
                    <li key={reply.id}></li>
						return (
							<div className="shadow p-3 mb-5 bg-white rounded box">
							<p className="text-primary"><b>{reply[0]} </b></p>
							<p>{reply[1]}</p>
                            <Voter></Voter>
							</div>
						)
                    }
			 	)}

                <form onSubmit = {submit}>
                    <center>
                        <div className="form-group">
                            <textarea className="form-control"
                            value={replyNameInput}
                            onChange={e=> setReplyNameInput(e.target.value)} 
                            type="text" 
                            id="name" 
                            placeholder="Name..."
                            rows="1"
                            />
                        </div>
                        <br></br>
                        <div className="form-group">
                            <textarea className="form-control" 
                            value={replyTextInput}
                            onChange={e=> setReplyTextInput(e.target.value)} 
                            type="text" 
                            id="post" 
                            placeholder="Write a Reply..." 
                            rows="2" 
                            />
                        </div>
                        <br></br>
                    </center>
                    <button className="btn btn-primary" 
                    disabled={replyNameInput.trim().length === 0 || replyTextInput.trim().length === 0} 
                    onClick={(e) => submitReply(e, post)}>
                      Reply
                    </button>
                </form>                
                </div>
            )}
        )}
        </>
    )
}

export default Post
