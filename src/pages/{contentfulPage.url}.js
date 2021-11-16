import React from 'react';
import { graphql } from 'gatsby';

import HomeView from '../components/home-view';
import BlogView from '../components/blog-view';
import DefaultView from '../components/default-view';

const getPage = (contentfulPage) => {
  const { type } = contentfulPage;

  switch (type) {
    case 'home':
      return <HomeView {...contentfulPage} />;
    case 'blog':
      return <BlogView {...contentfulPage} />;

    default:
      return <DefaultView {...contentfulPage} />;
  }
};

const Page = ({ data: { contentfulPage } }) => {
  return <main>{getPage(contentfulPage)}</main>;
};

export const data = graphql`
  query pageQuery($id: String) {
    contentfulPage(id: { eq: $id }) {
      type
      title
      description {
        description
      }
      image {
        file {
          url
        }
      }
    }
  }
`;

export default Page;
