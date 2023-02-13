import React, { useState } from 'react'

import { useSelector, useDispatch } from 'react-redux' //useDispatch use to fire the action
import { addOne, minusOne, setName } from './counterSlice'

function Counter() {
     const dispatch = useDispatch();
     const data = useSelector(state => state.counterData) //counterData coming from store.js -- count is coming from initialState in counterSlice.js--it should be state.counterData, but we shourt cut it to simplify it instead of making multipile line of useSelector for each state

     const [name, setNameValue] = useState('')

     const addNum = () => {
          dispatch(addOne())
     }
     const MinusNum = () => {
          dispatch(minusOne())
     }
     const changeName = () => {
          dispatch(setName(name))
     }

  return (
    <>
     <div>
          <button onClick={addNum} > + </button>
          <span>{data?.count}</span>
          <button onClick={MinusNum} > - </button>

          <input type='text' value={data?.name} ></input>
          <button onClick={changeName}> change Name </button>
          <input onChange={(e)=>setNameValue(e.target.value)} value={name} type='text' placeholder='enter name' ></input>
     </div>
    </>
  )
}

export default Counter