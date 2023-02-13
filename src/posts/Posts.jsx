import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts } from '../api/postApi';

function Posts() {

     const dispatch = useDispatch();
     const postsData = useSelector(state => state.postData.posts)
     const isLoading = useSelector(state => state.postData.isLoading)
     const error = useSelector(state => state.postData.error)


     
     useEffect(() => {
          dispatch(getAllPosts("https://jsonplaceholder.typicode.com/posts"))
     }, [dispatch])


  return (
    <div>
     {
          error !== null ? <h1>{error}</h1> : null
     }
     {
          isLoading ? <h1>Loading...</h1> : (
               postsData.length >= 1 ? (postsData.map(post => <h6>{post.title}</h6>)): (<h6>no pots</h6>)
          )
     }

    </div>
  );
}

export default Posts