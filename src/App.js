import React from "react";
import "./App.scss";
import BlogPost from "./components/BlogPost/BlogPost";
import isoToStringDate from "./utils/dateUtils";

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
        <div className="row u-equal-height u-clearfix">
          {posts.map((post) => (
            <BlogPost
              key={post.id}
              postTopic={"Cloud and Server"}
              postImageSrc={post.featured_media}
              postImageAlt={""}
              postLink={post.link}
              postTitle={post.title.rendered}
              postType={"Article"}
              authorName={post._embedded.author[0].name}
              authorLink={post._embedded.author[0].link}
              datePosted={isoToStringDate(post.date)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
