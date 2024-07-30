import importToCDN from 'vite-plugin-cdn-import';

export const buildConfig = {
  cdn() {
    return importToCDN({
      prodUrl: 'https://unpkg.com/{name}@{version}/{path}',
      modules: [
        {
          name: 'react',
          var: 'React',
          path: 'umd/react.production.min.js',
        },
        {
          name: 'react-dom',
          var: 'ReactDOM',
          path: 'umd/react-dom.production.min.js',
        },
        {
          name: 'react-router-dom',
          var: 'ReactRouterDOM',
          path: 'umd/react-router-dom.min.js',
        },
        {
          name: '@reduxjs/toolkit',
          var: 'RTK',
          path: 'dist/redux-toolkit.umd.min.js',
        },
        {
          name: 'axios',
          var: 'axios',
          path: 'dist/axios.min.js',
        },
        {
          name: 'styled-components',
          var: 'styled',
          path: 'dist/styled-components.min.js',
        },
      ],
    });
  },
  external: [
    'react',
    'react-dom',
    'react-router-dom',
    '@reduxjs/toolkit',
    'axios',
    'styled-components',
  ],
};
