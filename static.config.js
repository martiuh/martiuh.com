// import axios from 'axios';
import path from 'path';
import slash from 'slash';

import Document from './Document';


export default {
  Document,
  extractCssChunks: true,
  devServer: {
    port: 3030
  },
  getSiteData: () => ({
    siteTitle: 'Tona-React-Static',
    siteDescription: 'Default starter',
    siteAuthor: '@martiuh',
    // analyticsId is optional
    analyticsId: null
  }),
  // getRoutes: async () => {
  // const { data: posts } = await axios.get(
  //   'https://jsonplaceholder.typicode.com/posts'
  // );

  // return [
  //   {
  //     path: '/blog',
  //     getData: () => ({
  //       posts
  //     }),
  //     children: posts.map(post => ({
  //       path: `/post/${post.id}`,
  //       template: 'src/containers/Post',
  //       getData: () => ({
  //         post
  //       })
  //     }))
  //   }
  // ];
  // },
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
