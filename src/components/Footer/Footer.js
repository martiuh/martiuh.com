import React from 'react';

import './Footer.scss';

export default function Footer() {
  return (
    <footer className="footer bp-black">
      <span />
      <span />
      <span />
      <strong>tona-react-static &#169; {new Date().getFullYear()}</strong>
      <p className="credits">
        <small>
          Some Icons made by <a href="https://www.freepik.com">freepik</a> from{' '}
          <a href="https://flaticon.com">flaticon</a>
        </small>
      </p>
    </footer>
  );
}
