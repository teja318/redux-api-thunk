import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {startGetPosts} from '../../actions/postAction'
const PostsList = (props) =>{
    const posts = useSelector((state) =>{
        return state.posts
    })

    const dispatch = useDispatch()
    
    useEffect(() =>{
        dispatch(startGetPosts())
    }, [dispatch])

    
    return (
        <div>
            <h2>Listing Posts - {posts.length}</h2>
            <ul>
                {
                    posts.map((ele, i) =>{
                        return <li key={i}>{ele.title}</li>
                    })
                }
            </ul>
        </div>
    )
}
export default PostsList