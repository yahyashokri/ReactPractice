import React, { useEffect, useState } from 'react';

function Posts() {
    const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
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