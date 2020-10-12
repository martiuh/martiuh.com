import React from 'react';
import { useRouteData } from 'react-static';
import { Link } from '@reach/router';
import { toTop, getProjectImage } from '../../utils';
import SEO from '../../components/SEO';
import Heading from '../../components/Heading';
import Content from '../../components/Content';
import Navbar from '../../components/Navbar';
import LeftArrow from '../../svg/left-arrow.svg';
import { PROJECT_NOW, PROJECT_TYPES } from '../../constants';
import dates from '../../lib/dates';

import './Project.scss';

const { Paragraph, StyledBox } = Content;

// (June 2016 - July 2016)

const formatFromToDates = (from, to) => {
  const formatString = 'MMMM YYYY';
  const isNow = to === PROJECT_NOW;
  const fromString = dates(from).format(formatString);

  let sentence = `(${fromString}`;
  if (isNow) {
    sentence = `${sentence} - Present`;
  } else {
    const toString = dates(to).format(formatString);
    sentence = `${sentence} - ${toString}`;
  }

  return `${sentence})`;
};

const getProjectTypeColor = type => {
  if (PROJECT_TYPES.job === type) {
    return ['text-glow-orange', 'Job'];
  } else if (PROJECT_TYPES.freelance === type) {
    return ['text-glow-blue', 'Freelance'];
  } else if (PROJECT_TYPES.openSource === type) {
    return ['text-glow-red', 'Open Source'];
  }
  return ['text-glow-red', ''];
};

export default function Project() {
  React.useEffect(() => toTop());
  const { project } = useRouteData();
  const { title, url, site, description, content, type, dates } = project;
  const projectImg = getProjectImage(project.thumb);
  const [projectTypeClassName, projectType] = getProjectTypeColor(type);
  return (
    <>
      <Navbar />
      <main>
        <SEO title={`${title}`} image={projectImg} />
        <Link
          className="project__link inline-block link-glow:green md:mx-8 mx-2"
          to="/projects"
        >
          <LeftArrow />
          Back
        </Link>
        <div className="md:mx-32 mx-5 my-5 max-w-2xl text-justify">
          <Heading level="1" textSize="xl" fontWeight="bold">
            {title}
          </Heading>
          <Paragraph italic my="2">
            {description}
          </Paragraph>
          <div className="flex">
            <Paragraph
              display="inline-block"
              className={projectTypeClassName}
              mr="2"
            >
              {projectType}
            </Paragraph>
            <Paragraph>{formatFromToDates(dates.from, dates.to)}</Paragraph>
          </div>
          <a href={url || site} className="link-glow underline">
            {url ? 'Checkout what I did' : 'Visit Their Site'}
          </a>
          <StyledBox>
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </StyledBox>
        </div>
      </main>
    </>
  );
}
