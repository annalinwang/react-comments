import React, { useState, useEffect } from 'react'

const Voter = () => {
    const [votes, incrementVotes] = useState(0)

    const increaseVoteCount = () => {
        incrementVotes(voteCount + 1)
    }
    const decreaseVoteCount = () => {
        incrementVotes(voteCount - 1)
    } 

    return (
    <>
        <button className = 'upvote' onClick = {() => increaseVoteCount()}> +1 </button>
        <div>{voteCount}</div>
        <button className = 'downvote' onClick = {() => decreaseVoteCount()}> -1 </button>
    </>
    )

}

export default Voter