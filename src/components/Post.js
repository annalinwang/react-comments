import React, { useState, useEffect } from 'react'

const Post = () => {
    const [userNameInput, changeUserNameInput] = useState('')
    const [postInput, changePostInput] = useState('')

    const submit = e => {
        e.preventDefault()
        changeUserNameInput('')
        changePostInput('')
    }
    
    return (
        <>
        <br></br>
        <div class="shadow p-3 mb-5 bg-white rounded box">
            <form onSubmit = {submit}>
                <center>
                    <h1> New Post </h1>
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
                    <button type="submit" className="btn btn-primary">Submit</button>
                </center>
            </form>
        </div>
        </>
    )
}

export default Post