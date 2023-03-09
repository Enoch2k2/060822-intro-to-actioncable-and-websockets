import React, { useState } from 'react'

const ChatForm = ({ addMessage, setIsTyping }) => {
  const [content, setContent] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    fetch("/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }, 
      body: JSON.stringify({ content })
    })
      .then(resp => resp.json())
      .then(data => addMessage(data))
  }

  const handleKeyDown = e => {
    if (e.target.value.length > 0) {
      setIsTyping(true)
    } else {
      setIsTyping(false)
    }
  }

  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <input 
          type="text" 
          name="content" 
          id="content"
          value={ content }
          onChange={ e => setContent(e.target.value) }
          onKeyDown={ handleKeyDown }
          placeholder="Enter Text..."
        />
        <input type="submit" value="Send" />
      </form>
    </div>
  )
}

export default ChatForm;