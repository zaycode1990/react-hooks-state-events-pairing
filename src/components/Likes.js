
import React, { useState } from 'react'

function Likes({ likes, dislikes }) {
    const [likesTotal, setLikesTotal] = useState[likes]
    const [dislikesTotal, setDislikesTotal] = useState[dislikes]

    function upvotes() {

        setLikesTotal((likes) => likes + 1)
    }
    function downvotes() {
        setDislikesTotal((disLikes) => disLikes + 1)
    }

    return (
        <div>
            <button onClick={upvotes}>{likesTotal} 👍 </button>
            <button onClick={downvotes}>{dislikesTotal}👎</button>
        </div>
    )
}

export default Likes