import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/layouts/Layout.jsx';
const Home = React.lazy(() => import("./App.jsx"))
const Page404 = React.lazy(() => import("./components/pages/Page404"))
const SignInGoogle = React.lazy(() => import("./components/pages/SignInGoogle.tsx"))
const Dashboard = React.lazy(() => import("./components/layouts/Dashboard.jsx"))
import Loader from './components/Loader';
import { Provider } from 'react-redux';
import { store } from './store/state-redux';


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
    element: <Suspense fallback={<Loader />}><Dashboard /></Suspense>,
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
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    {/* <App /> */}
  </React.StrictMode>,
)
