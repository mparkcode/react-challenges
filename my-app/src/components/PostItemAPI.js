import React from 'react'

function PostItemAPI(props) {
    const {type, user, webformatURL, tags} = props.post
    return (
        <div>
            <p>{type}</p>
            <p>{user}</p>
            <img src={webformatURL} alt={webformatURL}/>
            <p>{tags}</p>
        </div>
    )
}

export default PostItemAPI
