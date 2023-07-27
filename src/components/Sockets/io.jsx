import React, {useState, useEffect} from 'react'
import io from 'socket.io-client'
const socket = io.connect('http://localhost:3002')
// connect the socket-io to the server in the backend




function Io() {


    // flow goes sth like this, emit a message to the backend, then, the backend receives the message, the backend then sends the received message to the frontend to be dipslayed to the user

    const [message, setMessage] = useState('')
    const [messageReceived, setmessageReceived] =useState('')


    // we want to capture whatever the user types in the box and send it to the backend and back to the frontend

    const handleMessage =(e)=>{

        setMessage(e.target.value)
    }

    const sendMessage = ()=>{

        socket.emit('send_message', {message})

        //the backend serves as a layer, you can only emit a message to the backend

    }

    useEffect(()=>{

        socket.on('received_message', (data)=>{

            // console.log(data)

            // alert(data.message)

            setmessageReceived(data.message)


        })



    },[socket])


  return (


    <>

        <div className="input">


         <input type='text' onChange ={handleMessage} placeholder ='Enter your message'/>

         <button onClick ={sendMessage}>Send Message</button>
         <h1>Message received: {messageReceived}</h1>




        </div>
    
    
    
    </>


  )
}

export default Io