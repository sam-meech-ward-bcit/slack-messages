import axios from 'axios'

export async function getMessages() {
  const result = await axios.get("/api/messages")
  return result.data
}

export async function getMessage({messageId}) {
  const result = await axios.get(`/api/messages/${messageId}`)
  return result.data
}