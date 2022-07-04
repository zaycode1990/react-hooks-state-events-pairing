import React from 'react'

function Views({views, uploadDate}) {
  return (<>
    <p>{views} views | Uploaded{uploadDate}</p>
    </>
  )
}

export default Views