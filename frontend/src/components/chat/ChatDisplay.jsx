import React from 'react'
import ChatMessage from './ChatMessage'

import "./Chat.css"

const ChatDisplay = ({ messages, user, isTyping }) => {

  const chatMessages = messages.map( message => <ChatMessage key={ message.id } chat={ message } user={ user } />)

  return (
    <div id="display">
      { chatMessages }
      { isTyping ? <p>Someone is typing...</p> : null }
    </div>
  )
}

export default ChatDisplay