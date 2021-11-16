import React, { Fragment } from 'react';
import { Link } from 'gatsby';

import useBlogPosts from '../hooks/use-blog-posts';

const HomeView = (contentfulPage) => {
  const blogPosts = useBlogPosts();

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
      <h2>Latest Posts</h2>
      <ul>
        {blogPosts.slice(0, 3).map((node, index) => {
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

export default HomeView;
