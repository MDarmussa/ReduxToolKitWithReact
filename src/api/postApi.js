import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";



export const getAllPosts = createAsyncThunk('posts/getAll', async (url, thunkAPI) => {
     const {rejectWithValue} = thunkAPI
     try {
          const res = await axios.get(url)
          return res.data
     }catch(err) {
          console.log(err)
          return rejectWithValue(err.message)
     }   
})

//thunkAPI is use to handle error. if we have any error, the app should still running while you are getting error without giving you a blank page

