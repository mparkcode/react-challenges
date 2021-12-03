import React, { Component } from 'react'
import PostItem from './PostItem'
import Loader from './Loader'
import css from './css/Content.module.css'
import {savedPosts} from '../posts.json'

export class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoaded: false
        }
    }
    getData(){
        setTimeout(() => {
            this.setState({
                isLoaded: true
            })
        }, 2000)
    }
    componentDidMount(){
        this.getData()
    }
    
    render() {
        return (
            <div>
                <div className={css.TitleBar}>
                    <h1>My Photos</h1>
                </div>
                <div className={css.SearchResults}>
                    {this.state.isLoaded ? (savedPosts.map(post => <PostItem key={post.title} post={post} />)) : <Loader />}
                </div>
            </div>
        )
    }
}

export default Content
