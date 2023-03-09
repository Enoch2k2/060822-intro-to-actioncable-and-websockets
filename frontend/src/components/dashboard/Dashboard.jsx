import React, { useEffect, useState } from 'react'
import ChatDisplay from '../chat/ChatDisplay'
import ChatForm from '../chat/ChatForm'


const Dashboard = ({ user, ws }) => {
  
  const [messages, setMessages] = useState([])
  const [isTyping, setIsTyping] = useState(false);
  
  // gives instruction on what to do when websocket is initialized


  useEffect(() => {
    fetch("/messages")
      .then(resp => resp.json())
      .then(data => setMessages(data))
  }, [])

  ws.onmessage = e => {
    const data = JSON.parse(e.data);
    if(data.type === "ping") return;
    if(data.type === "welcome") return;
    if(data.type === "confirm_subscription") return;
    const message = JSON.parse(data.message);
    setMessages([...messages, message])
  }

  const addMessage = message => {
    setMessages([...messages, message])
  }

  return (
    <div id="container">
      <h3>Chat</h3>
      <ChatDisplay messages={ messages } user={ user } isTyping={ isTyping } />
      <ChatForm addMessage={ addMessage } setIsTyping={ setIsTyping } />
    </div>
  )
}

export default Dashboard