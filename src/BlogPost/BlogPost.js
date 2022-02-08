import React from "react";
import "./BlogPost.scss";
import isoToStringDate from "../utils/dateUtils";

function BlogPost({ post }) {
  return (
    <div className="p-card--highlighted col-4">
      <header className="p-card__header">
        <h5 className="p-muted-heading u-no-margin--bottom">Cloud and Server</h5>
      </header>
      <hr className="is-muted" />
      <div className="p-card__content">
          <img
          className="p-card__image"
            alt=""
            height="185"
            loading="lazy"
            src={post.featured_media}
            width="330"
          />
      </div>
      <h3 className="p-heading--4">
        <a href={post.link}>{post.title.rendered}</a>
      </h3>
      <p>
        <em>
          by <a href={post._embedded.link}>{post._embedded.author[0].name}</a>{" "}
          on {isoToStringDate(post.date)}
        </em>
      </p>
      <hr className="is-muted" />
      <p className="p-card__footer">Article</p>
    </div>
  );
}

export default BlogPost;
