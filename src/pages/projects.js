import React from 'react';
import { Link } from '@reach/router';
import { useRouteData } from 'react-static';

import Navbar from '../components/Navbar';
import Heading from '../components/Heading';
import Text from '../components/Text';
import Footer from '../components/Footer/Footer';

import SEO from '../components/SEO';
import dates from '../lib/dates';

function Paragraph(props) {
  return <Text {...props} />;
}

Paragraph.defaultProps = {
  my: '5',
  leading: '7',
  as: 'p'
};

const getFromToYears = (from, to) => {
  const fromYear = dates(from).year();
  const toYear = to === 'now' ? to : dates(to).year();

  // (2015 add matching parenthesis
  let result = `(${fromYear}`;

  if (fromYear === toYear) {
    return `${result})`;
  } else if (toYear === 'now') {
    return `${result} - present)`;
  }
  return `${result} - ${toYear})`;
};

export default function Projects() {
  const { projects } = useRouteData();

  return (
    <>
      <Navbar />
      <main className="flex justify-center">
        <SEO
          title="Projects"
          description="Some frontend projects from Tona González"
        />
        <div className="md:mx-32 mx-5 my-5 max-w-2xl text-justify">
          <Heading level="1" text="xl">
            My Projects
          </Heading>
          <Paragraph>
            I've been developing and doing things on the web since 2015, where I
            started building small PHP (incluiding one Telegram Bot), after that
            I moved tried to learn Ruby on Rails but I found it too hard and
            started learning some client side JavaScript.
          </Paragraph>
          <Paragraph>
            I continued doing tutorials and small projects with React, then I
            moved into the backend with Express and continued building stuff. My
            real first project was hidroval.com.mx (listed bellow) where I made
            both backend and frontend from scratch, it took me about a year to
            finish because I rewrite the app 3 times. But eventually it helped
            me to land my first job in tech.
          </Paragraph>
          <Heading>Here's a chronology of the projects/jobs I had</Heading>
          <ul>
            {projects.map(post => (
              <li key={post.basename}>
                <Link className="link-glow" to={`projects/${post.basename}`}>
                  <Paragraph>
                    {post.title} {getFromToYears(post.from, post.to)}
                  </Paragraph>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
