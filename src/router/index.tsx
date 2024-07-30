import * as React from 'react';
import { useRoutes, useLocation } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Books from '../components/Books';
import Banner from '../components/Banner';

export default function RouterConfig() {
  const location = useLocation();
  const nodeRef = React.useRef(null);
  let element = useRoutes([
    {
      path: '/',
      element: <HomePage />,
      children: [
        { index: true, element: <Banner /> },
        { path: 'books', element: <Books /> },
      ],
    },
  ]);

  return element;
}
