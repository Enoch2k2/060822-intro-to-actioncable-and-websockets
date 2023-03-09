import React from 'react'

const ChatMessage = ({ chat, user }) => {

  return (
    <div className="message"><span style={{color: chat.user.id == user.id ? "blue" : "red"}}>{chat.user.username}:</span> { chat.content }</div>
  )
}

export default ChatMessage