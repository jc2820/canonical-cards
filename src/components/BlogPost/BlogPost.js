import React from "react";
import "./BlogPost.scss";
import isoToStringDate from "../../utils/dateUtils";

function BlogPost({
  postTopic,
  postImageSrc,
  postImageAlt,
  postLink,
  postTitle,
  postType,
  authorName,
  authorLink,
  isoPostDate,
}) {
  return (
    <div className="blog-p-card--highlighted col-4">
      <header className="blog-p-card__header">
        <h4 className="p-muted-heading u-no-margin--bottom">
          {postTopic}
        </h4>
      </header>
      <div className="p-card__content">
        <img
          className="blog-p-card__image"
          alt={postImageAlt}
          src={postImageSrc}
        />
        <h3 className="p-heading--4">
          <a href={postLink}>{postTitle}</a>
        </h3>
        <p>
          <em>
            by <a href={authorLink}>{authorName}</a> on{" "}
            {isoToStringDate(isoPostDate)}
          </em>
        </p>
      </div>
      <footer className="blog-p-card__footer">
        <p className="">{postType}</p>
      </footer>
    </div>
  );
}

export default BlogPost;
