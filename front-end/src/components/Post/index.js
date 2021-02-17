import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx'
import { Avatar, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: "auto",
    // display: "flex"
    
  },
  avatar : {
    float: "left",
    marginRight: 10,
    marginBottom: 5
  },
  text: {
    paddingTop: 5,
  }
}))

export default function Comment({post, onClick}) {
  const classes = useStyles()

  return (
    <div onClick={() => {onClick(post._id)}} className={classes.root}>
      <Avatar className={classes.avatar} src={post.avatar}>{post.username[0]}</Avatar>
      <Typography className={classes.text} variant="body2" color="textPrimary" component="p">
        <b>{post.username}</b> {post.message}
      </Typography>
    </div>
  )
}