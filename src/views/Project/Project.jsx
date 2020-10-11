import React from 'react';
import { useRouteData } from 'react-static';
import { Link } from '@reach/router';
import { toTop, getProjectImage } from '../../utils';
import SEO from '../../components/SEO';
import LinkButton from '../../components/LinkButton';
import LeftArrow from '../../svg/left-arrow.svg';

import './Project.scss';

export default function Project() {
  React.useEffect(() => toTop());
  const { project } = useRouteData();
  const projectImg = getProjectImage(project.thumb);
  return (
    <main className="content-box">
      <SEO title={`${project.title}`} image={projectImg} />
      <div>
        {' '}
        <Link className="primary-link" to="/projects">
          <LeftArrow />
          Back
        </Link>
        <div className="text-container">
          <h1>{project.title}</h1>
          <p className="text-xl mt-2 bp-black">{project.description}</p>
        </div>
      </div>
      <figure className="project-figure">
        <img
          alt={`Imagen de la página de ${project.title}`}
          src={projectImg}
          className="project-figure__image shadow-2xl"
        />
      </figure>
      <div className="flex-centered" style={{ marginTop: '3rem' }}>
        <LinkButton
          href={project.url}
          className="action-btn"
          style={{ color: 'white' }}
        >
          Ver en Acción
        </LinkButton>
      </div>
      <div
        className="text-container"
        dangerouslySetInnerHTML={{ __html: project.content }}
      />
    </main>
  );
}
