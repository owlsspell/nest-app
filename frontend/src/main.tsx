import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/layouts/Layout.jsx';
const Home = React.lazy(() => import("./App.tsx"))
const Page404 = React.lazy(() => import("./components/pages/Page404"))
const SignInGoogle = React.lazy(() => import("./components/pages/SignInGoogle.tsx"))
// import Dashboard from "./components/pages/Dashboard.jsx"
const Dashboard = React.lazy(() => import("./components/layouts/Dashboard.jsx"))


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

    ]
  },
  {
    path: "/dashboard",
    element: <Suspense fallback={<div>Loading...</div>}><Dashboard /></Suspense>,
    errorElement: <Page404 />,
    // children: [
    // {
    //   path: "/",
    //   element: <Home />,
    // },

    // ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
)
