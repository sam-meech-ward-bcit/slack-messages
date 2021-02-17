import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"

import CircularProgress from '@material-ui/core/CircularProgress';


import { getMessage } from '../../network'

import PostDetails from '../../components/PostDetails'

export default function MessageDetasilsPage() {

  const [message, setMessage] = useState()

  const { messageId } = useParams()

  useEffect(() => {
    (async () => {
      const result = await getMessage({messageId: messageId})
      const message = result.message
      setMessage(message)
    })()
  }, [])

  return (
    <div className="App">
      {
        !message ?
        <CircularProgress />
      :
      <PostDetails post={message}>
      </PostDetails>
      }
    </div>
  )
}
