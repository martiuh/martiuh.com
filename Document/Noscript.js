import React from 'react';

export default function Noscript() {
  return (
    <noscript>
      <div
        style={{
          padding: '30px',
          color: 'black',
          fontWeight: 'bold'
        }}
      >
        <p>Este sitio funciona mejor con JavaScript</p>
        <a
          style={{ textDecoration: 'none', color: 'rgb(43, 118, 231)' }}
          href="https://www.google.com/search?q=activar+javascript&oq=activar+javascript&aqs=chrome..69i64j0l5.5862j0j7&sourceid=chrome&ie=UTF-8"
        >
          Activar JavaScript
        </a>
      </div>
    </noscript>
  );
}
