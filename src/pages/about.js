import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';

import SEO from '../components/SEO';

export default function About() {
  return (
    <>
      <Navbar />
      <main>
        <SEO title="About" description="tona-react-static starter" />
        <h1>About</h1>
        <code>Default starter made by @martiuh</code>
      </main>
      <Footer />
    </>
  );
}
