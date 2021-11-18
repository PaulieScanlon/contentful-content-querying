import React from 'react';
import { graphql } from 'gatsby';

import HomeTemplate from '../templates/home-template';
import BlogTemplate from '../templates/blog-template';
import DefaultTemplate from '../templates/default-template';

const getTemplate = (contentfulPage) => {
  const { template } = contentfulPage;

  switch (template) {
    case 'home':
      return <HomeTemplate {...contentfulPage} />;
    case 'blog':
      return <BlogTemplate {...contentfulPage} />;

    default:
      return <DefaultTemplate {...contentfulPage} />;
  }
};

const Page = ({ data: { contentfulPage } }) => {
  return <main>{getTemplate(contentfulPage)}</main>;
};

export const data = graphql`
  query pageQuery($id: String) {
    contentfulPage(id: { eq: $id }) {
      template
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
