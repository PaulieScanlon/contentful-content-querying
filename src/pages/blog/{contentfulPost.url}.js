import React, { Fragment } from 'react';
import { graphql } from 'gatsby';

const Page = ({ data: { contentfulPost } }) => {
  return (
    <Fragment>
      <h1>{contentfulPost.title}</h1>
      <code>{JSON.stringify(contentfulPost.richText.raw, null, 2)}</code>
    </Fragment>
  );
};

export const data = graphql`
  query postQuery($id: String) {
    contentfulPost(id: { eq: $id }) {
      title
      richText {
        raw
      }
    }
  }
`;

export default Page;
