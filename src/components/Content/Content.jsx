import React from 'react';
import Text from '../Text';

import './Content.scss';

function Paragraph(props) {
  return <Text {...props} />;
}

Paragraph.defaultProps = {
  my: '5',
  leading: '7',
  as: 'p'
};

function StyledBox({ children }) {
  return <div className="content__contentBox">{children}</div>;
}

export default {
  Paragraph,
  StyledBox
};
