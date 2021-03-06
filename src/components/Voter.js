import React, { useState, useEffect } from 'react'

const Voter = () => {
    const [voteCount, changeVoteCount] = useState(0)

    const voteUp = () => {
        changeVoteCount(voteCount + 1)
    }

    const voteDown = () => {
        changeVoteCount(voteCount - 1)
    } 

    return (
        <>
        <button className="btn btn-link" onClick={(e) => voteUp()}>+1</button>
        {voteCount} 
        <button className="btn btn-link" onClick={(e) => voteDown()}>-1</button>    
        </>
    )
}

export default Voter