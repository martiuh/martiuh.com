import React from 'react';
import Noscript from './Noscript';

export default function Document({ Html, Head, Body, children }) {
  return (
    <Html lang="es-MX">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Noscript />
      </Head>
      <Body>{children}</Body>
    </Html>
  );
}
