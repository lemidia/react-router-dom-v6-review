import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Post() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const data = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );

      const result = await data.json();

      setPost(result);
    };

    const fetchComments = async () => {
      const data = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}/comments`
      );

      const result = await data.json();

      setComments(result);
    };
    fetchPost();
    fetchComments();
  }, []);

  return (
    <div>
      <h1>Post #{post.id}</h1>
      <h2>Post Title : {post.title}</h2>
      <hr />
      <h3>{post.body}</h3>
      <br />
      <h2>Comments</h2>
      <hr />
      {comments.map((comment, index) => (
        <>
          <h3>
            Author : {comment.name} | {comment.email}
          </h3>
          <p>Comment : {comment.body}</p>
        </>
      ))}
      <hr />

      <br />
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Go Back
      </button>
    </div>
  );
}

export default Post;
