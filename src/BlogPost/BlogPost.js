import React from "react";
import "./BlogPost.scss";
import isoToStringDate from "../utils/dateUtils";

function BlogPost({ post }) {
  return (
    <div className="blog-p-card--highlighted col-4">
      <header className="p-card__header">
        <h4 className="p-muted-heading u-no-margin--bottom">
          Cloud and Server
        </h4>
      </header>
      {/* <hr className="is-muted" /> */}

      <div className="p-card__content">
        <img
          className="blog-p-card__image"
          alt=""
          src={post.featured_media}
        />
        <h3 className="p-heading--4">
          <a href={post.link}>{post.title.rendered}</a>
        </h3>
        <p>
          <em>
            by{" "}
            <a href={post._embedded.author[0].link}>
              {post._embedded.author[0].name}
            </a>{" "}
            on {isoToStringDate(post.date)}
          </em>
        </p>
        {/* <hr className="is-muted u-sv1" /> */}
      </div>
      <footer className="p-card__footer">
        <p className="">Article</p>
      </footer>
    </div>
  );
}

export default BlogPost;
