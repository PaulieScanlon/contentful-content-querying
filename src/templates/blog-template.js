import React, { Fragment } from 'react';
import { Link } from 'gatsby';

import useAllBlogPosts from '../hooks/use-all-blog-posts';

const BlogTemplate = (contentfulPage) => {
  const allBlogPosts = useAllBlogPosts();

  return (
    <Fragment>
      <h1>{contentfulPage.title}</h1>
      <p>{contentfulPage.description.description}</p>
      {contentfulPage.image ? (
        <img
          src={contentfulPage.image.file.url}
          alt={contentfulPage.title}
          style={{
            width: 300,
            height: 'auto'
          }}
        />
      ) : null}
      <ul>
        {allBlogPosts.map((node, index) => {
          const { title, gatsbyPath } = node;
          return (
            <li key={index}>
              <Link to={gatsbyPath}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
};

export default BlogTemplate;
