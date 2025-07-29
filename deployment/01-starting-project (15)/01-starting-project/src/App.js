import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { loader as postsLoader } from './pages/Blog';
import HomePage from './pages/Home';
import { loader as postLoader } from './pages/Post';
import RootLayout from './pages/Root';
import { Suspense } from 'react';

const BlogPage = () => lazy(import("./pages/Blog")) // in order to load a component since jsx code should be used and not a promise so we 
// wrap it inside lazy

const PostPage = () => lazy(import("./pages/Post"));

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'posts',
        children: [
          { index: true, element: <Suspense fallback={<p>Loading...</p>}><BlogPage /></Suspense>, loader: () => import("./pages/Blog").then(module => module.loader())}, // if we want to load blog page dynamicaly 
          { path: ':id', element: <Suspense fallback={<p>Loading...</p>}><PostPage /></Suspense>, loader: ({params}) => import("./pages/Post").then(module => module.loader({params}))},
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
