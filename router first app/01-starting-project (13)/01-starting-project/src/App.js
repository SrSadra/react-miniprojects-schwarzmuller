import { createBrowserRouter, createRoutesFromElements, Router, RouterProvider } from "react-router-dom";
import HomePage from "./components/HomePage";
import Route from "./components/Route"
import ProductPage from "./components/ProductPage";
import ErrorPage from "./components/ErrorPage";
import ProductDetail from "./components/ProductDetail";


// const routeDefinitions = createRoutesFromElements( // old approach
//   <Route>
//     <Route path="/" element={<HomePage />} />
//   </Route>
// )

// const router = createBrowserRouter(routeDefinitions)

const router = createBrowserRouter([ // object based approach
  {
    path:"/", element: <Route />,
    errorElement: <ErrorPage />, // this is for when the route is not founded  
    children: [
      {path : "/"  ,element : <HomePage />},
      {path: "/product", element: <ProductPage />},
      {path: "/product/:id" , element: <ProductDetail /> } // :id is dynamic part of path which differs from one product to another
    ]
  }
])

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
