import React, { Component } from 'react'
import PostItem from './PostItem'
import css from './css/Content.module.css'
import {savedPosts} from '../posts.json'

export class Content extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div>
                <div className={css.TitleBar}>
                    <h1>My Photos</h1>
                </div>
                <div className={css.SearchResults}>
                    {
                        savedPosts.map(post => <PostItem key={post.title} post={post} />)
                    }
                </div>
            </div>
        )
    }
}

export default Content
