import React from 'react';
import Post from './Post/Post';
import useStyles from './postsStyles';
import { useSelector } from 'react-redux';
import { CircularProgress, Grid } from '@material-ui/core';

const Posts = ({ setCurrentId }) => {
  const styles = useStyles();
  const posts = useSelector((state) => state.posts);

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid className={styles.container} container alignItems="stretch">
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6}>
          <Post setCurrentId={setCurrentId} post={post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
