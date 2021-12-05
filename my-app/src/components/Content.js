import React, { Component } from 'react'
import PostItem from './PostItem'
import Loader from './Loader'
import css from './css/Content.module.css'
import {savedPosts} from '../posts.json'

export class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoaded: false,
            posts: []
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
        this.setState({
            posts: savedPosts
        })
    }
    handleChange = event => {
        this.setState({
            posts: savedPosts.filter(post => post.name.toLowerCase().includes(event.target.value.toLowerCase()))
        })
    }
    render() {
        return (
            <div className={css.Content}>
                <div className={css.TitleBar}>
                    <h1>My Photos</h1>
                    <div>
                        <form>
                            <input onChange={this.handleChange} id="searchInput"/>
                        </form>
                        <h4>posts found: {this.state.posts.length}</h4>
                    </div>
                </div>
                <div className={css.SearchResults}>
                    {this.state.isLoaded ? (this.state.posts.map(post => <PostItem key={post.title} post={post} />)) : <Loader />}
                </div>
            </div>
        )
    }
}

export default Content
