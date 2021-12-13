import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Posts() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const data = await fetch("https://jsonplaceholder.typicode.com/posts");

      const result = await data.json();

      setPosts(result);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <h1>Top 100 Posts</h1>
      <hr />
      <h3>! Click the Post to view specific details</h3>
      <hr />
      {posts.map((post, index) => (
        <div
          key={index}
          onClick={() => {
            navigate(`/posts/${post.id}`);
          }}
        >
          <ul>
            <li>
              <h2>
                {post.id} | {post.title}
              </h2>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Posts;
