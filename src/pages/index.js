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
        <SEO title="Martiuh.com" titleTemplate={false} />
        <div className="flex justify-between index--hero">
          <div className="im-section">
            <h1 className="main header ">I'm Tona González</h1>
            <h2 className="second header">a Frontend Developer</h2>
            <div className="flex--centered index--linkbar">
              <a href="https://twitter.com/martiuh" className="link-glow">
                Twitter
              </a>
              <a href="https://github.com/martiuh" className="link-glow">
                Github
              </a>
              <a
                href="https://www.linkedin.com/in/martiuh"
                className="link-glow"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <div className="terminal-section flex--centered">
            <Terminal />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
