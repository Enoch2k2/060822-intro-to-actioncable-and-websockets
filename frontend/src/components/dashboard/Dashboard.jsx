import React, { useEffect, useState } from 'react'
import ChatDisplay from '../chat/ChatDisplay'
import ChatForm from '../chat/ChatForm'

const Dashboard = ({ user }) => {

  const [messages, setMessages] = useState([])
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    fetch("/messages")
      .then(resp => resp.json())
      .then(data => setMessages(data))
  }, [])

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