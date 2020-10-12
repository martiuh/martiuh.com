import React from 'react';
import { Link } from '@reach/router';

import './LinkButton.scss';

export default function LinkButton({ size, ...props }) {
  let linkClassName = 'link-button';
  linkClassName = size ? `${linkClassName} ${size}` : linkClassName;
  linkClassName = `${linkClassName} ${props.className}`;
  if (props.href) {
    return <a {...props} className={linkClassName} />;
  }
  return <Link {...props} className={linkClassName} />;
}

LinkButton.defaultProps = {
  size: '',
  to: '',
  href: null
};
