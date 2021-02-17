import './App.css'

import { useEffect, useState } from 'react'

import { getMessages } from './network'

import Post from './components/Post'


function App() {

  const [messages, setMessages] = useState()

  useEffect(() => {
    (async () => {
      const result = await getMessages()
      const messages = result.messages
      setMessages(messages)
    })()

    // getMessages()
    // .then(result => {
    //   setMessages(result.messages)
    // })

  }, [])

  return (
    <div className="App">
      {
        !messages ?
        <p>Loading ...</p>
      :
      
        messages.map(message => (
          <Post 
          key={message._id}
          post={message}
          ></Post>
        ))
      }
    </div>
  )
}

export default App
