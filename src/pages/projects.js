import React from 'react';
import { useRouteData } from 'react-static';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';

import SEO from '../components/SEO';

export default function Projects() {
  const { projects } = useRouteData();

  return (
    <>
      <Navbar />
      <main className="p2">
        <SEO
          title="Projects"
          description="Some frontend projects from Tona Gonz"
        />
        <h1>Cool Projects</h1>
        <p>
          I've been developing and doing things on the web since 2015 but I've
          been getting paid for doing software since Nov 2017 when I took the
          challenge of building an application from back to font end
        </p>
        <ul>
          {projects.map(post => (
            <li key={post.basename}>
              <p>{post.title}</p>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
}
