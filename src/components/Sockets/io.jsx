import React from 'react'
import io from 'socket.io-client'
const socket = io.connect('http://localhost:3002')
// connect the socket-io to the server in the backend




function Io() {


    const sendMessage = ()=>{


    }


  return (


    <>

        <div className="input">


         <input type='text' placeholder ='Enter your message'/>

         <button onClick ={sendMessage}>Send Message</button>



        </div>
    
    
    
    </>


  )
}

export default Io