import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Posts() {
    const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        alert('Error fetching data!')
      });
  }, []);

  return (
    <>
      {posts.map(post => (
          <div key={post.id}>
          {post.title ? <h1>{post.title}</h1>: <h1>Loading...</h1>}
          {post.body ? <p>{post.body}</p> : <p>Loading...</p>}
        </div>
      ))}
      </>
  );
}

export default Posts;