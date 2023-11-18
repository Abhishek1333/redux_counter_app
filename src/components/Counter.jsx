import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../redux/counterSlice'

function Counter() {
  //state to hold value from input box
  const[range,SetRange]=useState("")
  // hook to dispatch a function in action
  const dispatch=useDispatch()
  // component can access the state by using useselector hook
  const count=useSelector((state)=>state.counter.value)
 
  console.log(range);

  return (
<>
      <div className='d-flex align-items-center justify-content-center w-100 mt-5 flex-column'>
          <h1 style={{fontSize:'90px'}}>{count}</h1>
          <div className='mt-5'>
              <button onClick={()=>dispatch(decrement(Number(range)))} className='btn btn-warning ms-3'>Decrement</button>
              <button onClick={()=>dispatch(increment(Number(range)))} className='btn btn-danger ms-3'>Increment</button>
              <button onClick={()=>dispatch(reset())} className='btn btn-success ms-3'>Reset</button>
          </div>
      </div>
       {/* input box */}
       <div>
       <input onChange={(e)=>SetRange(e.target.value)} type="text" className='form-control w-100 mt-5' placeholder='enter the range' style={{borderColor:'blue'}} />
     </div>
</>
  )
}

export default Counter