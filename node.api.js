import React from 'react';
import path from 'path';
import slash from 'slash';
import WebpackPwaManifestPlugin from 'webpack-pwa-manifest';
import fs from 'fs';
import webpack from 'webpack';
import ExtractCssChunks from 'extract-css-chunks-webpack-plugin';
import semver from 'semver';
import AppManifestWebpackPlugin from 'app-manifest-webpack-plugin';
import parse from 'html-react-parser';
import Analytics from './Document/Analytics';

import staticConfig from './static.config';
import customFileLoader from './customFileLoader';
import customSvgLoader from './customSvgLoader';

const { analyticsId } = staticConfig.getSiteData();

const customSassLoader = stage => {
  const includePaths = [];
  const rest = {};
  let loaders = [];

  const sassLoaderPath = require.resolve('sass-loader');

  const sassLoader = {
    loader: sassLoaderPath,
    options: { includePaths: ['src/', ...includePaths], ...rest }
  };
  const cssLoader = {
    loader: 'css-loader',
    options: {
      importLoaders: 1,
      sourceMap: false
    }
  };

  if (stage === 'node') {
    // Node
    // Don't extract css to file during node build process
    loaders = [cssLoader, 'postcss-loader', sassLoader];
  } else {
    // Prod

    // for legacy css-loader version (<2.0) we need to add "minimize" to minify css code
    // for >2.0 it is handled with https://github.com/NMFR/optimize-css-assets-webpack-plugin
    // const cssLoaderVersion = require('css-loader/package.json').version;
    // if (semver.satisfies(cssLoaderVersion, '<2') === true) {
    //   cssLoader.options.minimize = true;
    // }

    loaders = [
      {
        loader: ExtractCssChunks.loader,
        options: {
          hot: true
        }
      },
      cssLoader,
      'postcss-loader',
      sassLoader
    ];
  }

  return {
    test: /\.(c|sa|sc)ss$/,
    loader: loaders
  };
};

const PWAManifest = {
  name: 'React Static Tona',
  filename: 'manifest.webmanifest',
  description: 'Single Starter',
  background_color: '#000',
  crossorigin: 'use-credentials',
  icons: [
    {
      src: slash(path.resolve('./src/images/logo-app.png')),
      sizes: [96, 128, 192, 256, 384, 512, 1024]
    }
  ],
  inject: false
};

export default () => ({
  webpack: (config, { stage, defaultLoaders }) => {
    if (stage !== 'node') {
      config.plugins.push(new WebpackPwaManifestPlugin(PWAManifest));
      config.plugins.push(
        new AppManifestWebpackPlugin({
          logo: path.resolve('./src/images/logo.png'),
          inject: false,
          emitStats: true,
          statsFilename: 'faviconStats.json',
          config: {
            icons: {
              favicons: true,
              appleIcon: false,
              appleStartup: false,
              android: false,
              firefox: false,
              windows: false,
              yandex: false
            }
          }
        })
      );
    }

    const globalsObj = {
      BROWSER: JSON.stringify(stage !== 'node')
    };

    if (analyticsId) {
      globalsObj.ANALYTICS_ID = JSON.stringify(analyticsId);
    }

    config.plugins.push(new webpack.DefinePlugin(globalsObj));

    config.module.rules[0].oneOf = [
      customSassLoader(stage),
      customSvgLoader(),
      customFileLoader(stage),
      // defaultLoaders.cssLoader,
      defaultLoaders.jsLoader,
      defaultLoaders.jsLoaderExt,
      defaultLoaders.fileLoader
    ];

    return config;
  },
  headElements: elements => {
    // manually add the html tags
    const manifest = JSON.parse(
      fs.readFileSync(slash('./dist/manifest.webmanifest')).toString()
    );
    const faviconStats = JSON.parse(
      fs.readFileSync(slash('./dist/faviconStats.json')).toString()
    );

    const { html } = faviconStats;
    const headArr = [
      ...elements,
      <React.Fragment>
        <link
          rel="manifest"
          href="/manifest.webmanifest"
          crossOrigin="use-credentials"
        />
        {manifest.icons.map(icon => (
          <link rel="apple-touch-icon" sizes={icon.sizes} href={icon.src} />
        ))}
      </React.Fragment>,
      <React.Fragment>{parse(html.join(' '))}</React.Fragment>
    ];
    if (analyticsId) {
      headArr.push(<Analytics id={analyticsId} />);
    }

    return headArr;
  }
});
