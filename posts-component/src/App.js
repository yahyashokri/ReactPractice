import './App.css';
import PostCard from './components/PostCard/PostCard';
import React, { useEffect, useState } from 'react';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async()=>{
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      await setPosts(data)
    }
    fetchData()
    // fetch('https://jsonplaceholder.typicode.com/posts')
    // .then(response => response.json())
    // .then(data => setData(data))
    // .then(console.log(data))
    // .catch(error => {
    //     console.error('Error fetching data:', error);
    //     alert('Error fetching data!')
    //   });
  }, []);

  return (
    <>
    {posts.map(post =>{return(
      <PostCard key={post.id} title={post.title} body={post.body}/>
    )})
  }
  </>
  );
}

export default App;