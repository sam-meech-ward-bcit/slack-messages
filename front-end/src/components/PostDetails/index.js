import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Avatar, CardHeader, IconButton, Typography, Card, CardActionArea, CardActions, CardContent, CardMedia } from '@material-ui/core'
import { Comment, Favorite, FavoriteBorder } from '@material-ui/icons'

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
  },
  media: {
    maxHeight: 200,
  }
})

export default function Post({post}) {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar className={classes.avatar}>
            {post.username[0]}
          </Avatar>
        }
        title={post.username}
      />
      <CardActionArea>
        <CardMedia className={classes.media}
          component="img"
          image={post.avatar}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {post.message}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="body2" color="textPrimary" component="p">
            {post.timestamp}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}