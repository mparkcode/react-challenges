import React, {useState, useEffect} from 'react'
import PostItem from './PostItem'
import Loader from './Loader'
import css from './css/Content.module.css'
import {savedPosts} from '../posts.json'

function ContentHooks() {
    const [isLoaded, setIsLoaded] = useState(false)
    const [fetchedPosts, setFetchedPosts] = useState([])
    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true)
            setFetchedPosts(savedPosts)
        }, 3000)
    }, [])
    return (
        <div className={css.Content}>
            <div className={css.TitleBar}>
                <h1>My Photos</h1>
                <div>
                    <form>
                        <input onChange={(e) => setFetchedPosts(
                            savedPosts.filter(
                                post => post.name.toLowerCase().includes(e.target.value.toLowerCase()))
                            )} id="searchInput"/>
                    </form>
                    <h4>posts found: {fetchedPosts.length}</h4>
                </div>
            </div>
            <div className={css.SearchResults}>
                {isLoaded ? (fetchedPosts.map(post => <PostItem key={post.title} post={post} />)) : <Loader />}
            </div>
        </div>
    )
}

export default ContentHooks
