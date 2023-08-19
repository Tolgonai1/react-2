import {useEffect, useState} from "react";
import axios from "axios";
import "./PostPage.css"
import {Link} from "react-router-dom";

export function PostsPage(){
    const [posts,setPosts] = useState([])
    useEffect(()=>{
        axios.get('https://dummyjson.com/posts')
            .then(resp => setPosts(resp.data.posts))
    },[])
    return (
        <div className="posts-wrapper">
            {posts.map(post => (
                <ol className='posts-list' key={post.id}>
                    <li>Id: {post.id}</li>
                    <li>Title: {post.title}</li>
                    <li>Body: {post.body}</li>
                    <li>UserId: {post.userId}</li>
                    <li>Tags: {post.tags}</li>
                    <li>Reactions: {post.reactions}</li>
                </ol>
            ))}
            <Link to='/create'><h2 className='newPost'>Create post</h2></Link>
        </div>
    )
}