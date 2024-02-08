import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
const Home = React.lazy(() => import("./App.tsx"))
const Page404 = React.lazy(() => import("./components/pages/Page404"))
const SignInGoogle = React.lazy(() => import("./components/pages/SignInGoogle.tsx"))
const Dashboard = React.lazy(() => import("./components/Dashboard"))


const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <Page404 />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/sign_in_google",
        element: <SignInGoogle />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
)
