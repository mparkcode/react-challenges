import React, { Component } from 'react'
import PostItemAPI from './PostItemAPI'
import Loader from './Loader'
import css from './css/Content.module.css'
import axios from 'axios'
import API_KEY from '../secrets'

export class ContentAPI extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoaded: false,
            posts: [],
            savedPosts: []
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
        this.fetchData()
    }
    async fetchData(){
        axios.get(`https://pixabay.com/api/?key=${ API_KEY }&q=tokyo&image_type=photo&per_page=100`)
        .then(response => this.setState({
            posts: response.data.hits,
            savedPosts: response.data.hits,
            isLoaded: true
        }))
    }
    handleChange = event => {
        this.setState({
            posts: this.state.savedPosts.filter(post => post.user.toLowerCase().includes(event.target.value.toLowerCase()))
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
                    {this.state.isLoaded ? (this.state.posts.map(post => <PostItemAPI key={post.id} post={post} />)) : <Loader />}
                </div>
            </div>
        )
    }
}

export default ContentAPI

