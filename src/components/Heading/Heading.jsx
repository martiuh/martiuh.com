import React from 'react';

const headingLevel = Object.freeze({
  '1': '1',
  '2': '2',
  '3': '3',
  '4': '4',
  '5': '5',
  '6': '6'
});

export default function Heading(props) {
  const { children, level, ...tailwindProps } = props;
  const { textSize, fontWeight, lineHeight } = tailwindProps;

  const Node = `h${headingLevel[level] || headingLevel['3']}`;

  return (
    <Node
      className={`text-${textSize} font-${fontWeight} leading-${lineHeight}`}
    >
      {children}
    </Node>
  );
}

Heading.defaultProps = {
  textSize: 'lg',
  fontWeight: 'bold',
  lineHeight: '8'
};
