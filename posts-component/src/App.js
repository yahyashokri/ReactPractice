import './App.css';
import PostCard from './components/PostCard/test2';
// import React, { useEffect, useState } from 'react';

function App() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const rawData = fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then(response => {
  //       setData(rawData.json);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching data:', error);
  //       alert('Error fetching data!')
  //     });
  // }, []);

  return (
         <PostCard className="box-border "/>
  );
}

export default App;