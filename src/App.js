import React from "react";
import "./App.scss";
import BlogPost from "./BlogPost/BlogPost";

function App() {
  const [error, setError] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    fetch(
      "https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json"
    )
      .then((res) => res.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setPosts(data);
          console.log(data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="App">
        {posts.map((post) => (
          <BlogPost key={post.id} />
        ))}
      </div>
    );
  }
}

export default App;
