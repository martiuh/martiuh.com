import React from 'react';

import Terminal from '../containers/Terminal';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer/Footer';
import SEO from '../components/SEO';
import '../css/index.scss';

export default function IndexPage() {
  return (
    <>
      <Navbar />
      <main className="index">
        <SEO title="Home" />
        <Terminal />
      </main>
      <Footer />
    </>
  );
}
