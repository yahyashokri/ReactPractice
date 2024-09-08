function PostCard(posts) {
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

export default PostCard;