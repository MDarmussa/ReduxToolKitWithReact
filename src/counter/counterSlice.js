import { createSlice } from "@reduxjs/toolkit";

// 3- create slice
const initialState = {
     count: 0,
     name: 'Sam'
}
const countSlice = createSlice({
     name: 'counter',
     initialState,
     reducers: {
          addOne: (state) => { //addOne is an action
               state.count += 1; //count is coming from initialState
          },
          minusOne: (state) => { 
               state.count -= 1
          },
          setName: (state, action) => {
               state.name = action.payload
          }
     }
})

export const { addOne, minusOne, setName  } = countSlice.actions

export default countSlice.reducer;