import { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";

import { getMessages } from '../../network'

import Post from '../../components/Post'

export default function MessagesPage() {

  const [messages, setMessages] = useState()
  const history = useHistory()

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
          onClick={() => history.push(`/messages/${message._id}`)}
          key={message._id}
          post={message}
          ></Post>
        ))
      }
    </div>
  )
}
