import React from 'react'

function PostItem(props) {
    const {title, name, image, description} = props.post
    return (
        <div>
            <p>{title}</p>
            <p>{name}</p>
            <img src={image} alt={description}/>
            <p>{description}</p>
        </div>
    )
}

export default PostItem
