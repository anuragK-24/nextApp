import React from 'react'

export default function Login() {
  return (  
    <div style={{display:"flex", flexDirection:'column',  width:"12em"}}>
        <label htmlFor="">Username</label>
        <input type="text" />

        <label htmlFor="">Password</label>
        <input type="text" />
        <button>Submit</button>
    </div>
  )
}
