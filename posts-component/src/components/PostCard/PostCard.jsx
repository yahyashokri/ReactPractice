function PostCard( {title , body} ) {
  return (
    <div className="box-border bg-gray-500" >
          {title ? <h2>{title}</h2>: <h2>Loading...</h2>}
          {body ? <p>{body}</p> : <p>Loading...</p>}
      </div>
  );
}

export default PostCard;