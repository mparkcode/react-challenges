import React, { useState, useEffect } from 'react'
import PostItemAPI from './PostItemAPI'
import Loader from './Loader'
import css from './css/Content.module.css'
import axios from 'axios'
import API_KEY from '../secrets'

function ContentAPIHooks() {
    const [isLoaded, setIsLoaded] = useState(false)
    const [posts, setPosts] = useState([])
    const [savedPosts, setSavedPosts] = useState([])
    const handleChange = (e) => {
        console.log('called')
        setPosts(savedPosts.filter(post => post.user.toLowerCase().includes(e.target.value.toLowerCase())))
    }
    useEffect(() => {
        axios.get(`https://pixabay.com/api/?key=${ API_KEY }&q=tokyo&image_type=photo&per_page=100`)
        .then(response => {
            console.log(response)
            setPosts(response.data.hits)
            setSavedPosts(response.data.hits)
            setIsLoaded(true)
        }

        )
    }, [])
    return (
        <div className={css.Content}>
            <div className={css.TitleBar}>
                <h1>My Photos</h1>
                <div>
                    <form>
                        <input onChange={handleChange} id="searchInput"/>
                    </form>
                    <h4>posts found: {posts.length}</h4>
                </div>
            </div>
            <div className={css.SearchResults}>
                {isLoaded ? (posts.map(post => <PostItemAPI key={post.id} post={post} />)) : <Loader />}
            </div>
        </div>
    )
}

export default ContentAPIHooks
