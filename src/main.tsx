import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './main.css'

import { ThemeProvider } from './context/ThemeProvider'
import Layout from './components/Layout'
import Home from './pages/home/Home'
import ErrorPage from './pages/error/ErrorPage'

const router = createBrowserRouter(
  [{
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "*", element: <ErrorPage /> },
    ]
  }],
  {
    // basename: "/Tools-Assets/",
  }
);


const rootElement = document.getElementById('root') as HTMLElement;

createRoot(rootElement).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router}/>
    </ThemeProvider> 
  </StrictMode>,
)
