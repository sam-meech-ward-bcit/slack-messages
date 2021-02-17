import React from 'react'
import PostDetails from './index'
import { actions } from '@storybook/addon-actions'

export default {
  title: 'PostDetails',
  component: PostDetails,
}

const post = {
  _id: "1",
  message: "I am running for President of the United States",
  username: "KanyeWest",
  avatar: "https://static.billboard.com/files/media/kanye-west-whh-2018-billboard-1548-compressed.jpg",
  timestamp: "12:01pm"
}

export const Default = () => (
  <PostDetails post={post} />
)
