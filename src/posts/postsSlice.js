import { createSlice } from "@reduxjs/toolkit";
import { getAllPosts } from "../api/postApi";

const initialState = {
     posts: [],
     isLoading: false,
     error: null,
}


const postsSlice = createSlice({
     name: 'posts',
     initialState,
     reducers:{
          
     },
     extraReducers: {
          [getAllPosts.pending]: (state, action) => {
               state.isLoading = true;
               state.error = null
          },
          [getAllPosts.fulfilled]: (state, action) => {
               state.posts = action.payload; //posts is the empty array in initialState
               state.isLoading = false;
               state.error = null

          },
          [getAllPosts.rejected]: (state, action) => {
               state.isLoading = false;
               state.error = action?.error?.message
          },
     }
})


export default postsSlice.reducer