// import axios from 'axios';
import path from 'path';
import slash from 'slash';
import fs from 'fs';
import matter from 'gray-matter';
import marked from 'marked';

import Document from './Document';
import { dateSorter, getDates, mapDates } from './static.utils';

const projectsDir = slash(path.resolve('./src/projects'));

export default {
  Document,
  extractCssChunks: true,
  devServer: {
    port: 3030
  },
  getSiteData: () => ({
    siteTitle: 'martiuh.com ',
    siteDescription: "Tonatiuh González's website",
    siteAuthor: '@martiuh',
    // analyticsId is optional
    analyticsId: null
  }),

  getRoutes: async () => {
    const projects = fs
      .readdirSync(projectsDir)
      .map(proj => {
        if (/\.md$/.test(proj)) {
          const projectString = fs
            .readFileSync(`${projectsDir}/${proj}`)
            .toString();
          const projectMatter = matter(projectString);
          const content = marked(projectMatter.content);
          const dates = getDates(projectMatter.data);
          return {
            ...projectMatter.data,
            content,
            basename: proj.replace(/\.md$/, ''),
            dates
          };
        }
        return null;
      })
      .filter(Boolean);

    return [
      {
        path: '/projects',
        getData: () => ({
          projects: dateSorter(projects, 'ASC')
        }),
        children: projects.map(project => ({
          path: `/${project.basename}`,
          template: 'src/views/Project',
          getData: () => ({
            project
          })
        }))
      }
    ];
  },
  plugins: [
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: slash(path.resolve('./src/pages'))
      }
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap')
  ]
};
