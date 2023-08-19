import {useState} from "react";
import axios from "axios";
import styles from "./create.module.css"
import {useNavigate} from "react-router-dom";

function CreatePostsPage(){
    const [post,setPost]=useState({
        title:'',
        body: '',
        userId: ''
    })
    const navigate = useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('https://dummyjson.com/posts/add',{
            title: post.title,
            body: post.body,
            userId: Number(post.userId)
        })
            .then((resp)=>{
                console.log(resp.data)
            })
    }
    function handleChange(e){
        const newPost = {...post}
        newPost[e.target.id] = e.target.value
        setPost(newPost)
    }
    return (
        <>
            <h2>Create post</h2>
            <form className={styles.wrapper} onSubmit={(e)=>handleSubmit(e)}>
                <input type="text" placeholder='Title' id="title" value={post.title} onChange={(e)=>handleChange(e)}/>
                <input type="text" placeholder="Body" id='body' value={post.body} onChange={(e) =>handleChange(e)}/>
                <input type="number" placeholder="userId" id='userId' value={post.userId} onChange={(e)=>handleChange(e)}/>
                <button>Submit</button>
                <button className={styles.button} onClick={()=>navigate(-1)}>Posts</button>
            </form>

        </>
    )
}
export default CreatePostsPage