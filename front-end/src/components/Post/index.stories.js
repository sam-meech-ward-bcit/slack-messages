
import React from 'react'
import { actions } from '@storybook/addon-actions'

import Post from './index'

const post = {
  _id: "1",
  message: "I am running for President of the United States",
  username: "KanyeWest",
  avatar: "https://static.billboard.com/files/media/kanye-west-whh-2018-billboard-1548-compressed.jpg",
  timestamp: "12:01pm"
}

export default {
  title: 'Post',
  component: Post,
}

const events = actions({ onClick: 'click' })

export const Default = () => (
  <Post 
  post={post}
  {...events}
  ></Post>
)
