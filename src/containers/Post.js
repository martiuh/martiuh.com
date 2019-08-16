import React from 'react';
import { useRouteData } from 'react-static';
import { Link } from '@reach/router';

import SEO from 'components/SEO';

export default function Post() {
  const { post } = useRouteData();
  return (
    <main>
      <SEO title={`${post.title}`} />
      <Link to="/blog/">{'<'} Back</Link>
      <br />
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </main>
  );
}
