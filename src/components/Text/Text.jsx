import React from 'react';

export default function Text(props) {
  const { children, as, className, ...tailwindProps } = props;
  const { leading, my, italic, display, mr } = tailwindProps;
  const Node = as || 'span';

  const withMarginRight = mr ? `mr-${mr}` : '';
  const withClassName = className ? className : '';
  return (
    <Node
      className={`my-${my} ${withMarginRight} leading-${leading} ${display} ${
        italic ? 'italic' : false
      } ${withClassName}`}
    >
      {children}
    </Node>
  );
}

Text.defaultProps = {
  my: '0',
  leading: '0',
  italic: false,
  display: 'block'
};
