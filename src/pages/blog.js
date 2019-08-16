import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';

import SEO from '../components/SEO';

export default function Blog() {
  const posts = Array.from(Array(100)).map((item, idx) => ({
    id: idx + 1,
    title: `Entrada #${idx + 1}`
  }));

  return (
    <>
      <Navbar />
      <main>
        <SEO title="Blog" description="Personal blog by Tonatiuh González" />
        <h1>Últimas entradas</h1>
        <code>
          Enumerar nuestros posts (del último al final) También blogs de otros
          servicios/páginas nuestros (de carácter dinámico)
        </code>
        <br />
        All Posts:
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <p>{post.title}</p>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
}
