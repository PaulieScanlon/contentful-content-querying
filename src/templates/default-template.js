import React, { Fragment } from 'react';

const DefaultTemplate = (contentfulPage) => {
  return (
    <Fragment>
      <h1>{contentfulPage.title}</h1>
      <p>{contentfulPage.description.description}</p>
      {contentfulPage.image ? (
        <img src={contentfulPage.image.file.url} alt={contentfulPage.title} />
      ) : null}
    </Fragment>
  );
};

export default DefaultTemplate;
