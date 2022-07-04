import React, { useState } from 'react'

function Comments({comments}) {
    const [isHidden, setIsHidden] = useState(true)
    const commentList = comments.map((comments) =>
        <>
            <h3>{comments.user}</h3>
            <p>{comments.comment}
            </p></>
    )

     const  buttonChange = () => setIsHidden(() => !isHidden)

    return (
        <div>
            <br></br>
            <button onClick={buttonChange}>{isHidden ? "Hide Comments" : "Show Comments"}</button>
            <hr></hr>
            {isHidden ? <div>
                <h2>{commentList.length} Comments</h2>
                {commentList} </div> : null}

        </div>
    )
}

export default Comments