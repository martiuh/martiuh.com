import React from 'react';
import { Root, Routes, addPrefetchExcludes } from 'react-static';
import { Router, Location } from '@reach/router';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import gTag from './gTag';
import './main.scss';
import './tailwind.css';

function Dynamic() {
  return (
    <>
      <Navbar />
      <main>
        <h1>Dynamic as fuck!!!</h1>
      </main>
      <Footer />
    </>
  );
}

addPrefetchExcludes(['dynamic']);

function App() {
  return (
    <Root>
      <React.Suspense
        fallback={
          <div style={{ height: '102vh' }}>
            <em>Loading...</em>
          </div>
        }
      >
        <Location>
          {({ location }) => {
            if (typeof ANALYTICS_ID !== 'undefined') {
              gTag('config', ANALYTICS_ID, {
                page_path: location.pathname
              });
            }

            return (
              <Router location={location}>
                <Dynamic path="dynamic" />
                <Routes path="*" />
              </Router>
            );
          }}
        </Location>
      </React.Suspense>
    </Root>
  );
}

export default App;
