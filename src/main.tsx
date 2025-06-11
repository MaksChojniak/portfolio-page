import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './main.css'

import { ThemeProvider } from './context/ThemeProvider'

import Layout from './components/Layout'

import Home from './pages/home/Home'

import BlockyPatrol from './pages/games/blocky-patrol/BlockyPatrol'
import IsoRacer from './pages/games/iso-racer/IsoRacer'

import ConsoleAbout from './pages/tools/console/about/ConsoleAbout'
import ConsoleBaseCommands from './pages/tools/console/base-commands/ConsoleBaseCommands'
import ConsoleOwnCommands from './pages/tools/console/own-commands/ConsoleOwnCommands'

import Donate from './pages/donate/Donate'
import Contact from './pages/contact/Contact'

import ErrorPage from './pages/error/ErrorPage'

const router = createBrowserRouter(
  [{
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "games", children: [
        { path: "blocky-patrol", element: <BlockyPatrol /> },
        { path: "iso-racer", element: <IsoRacer /> },
      ] },
      { path: "tools", children: [
        { path: "console", children: [
          { path: "about", element: <ConsoleAbout /> },
          { path: "basic-commands", element: <ConsoleBaseCommands /> },
          { path: "own-commands", element: <ConsoleOwnCommands /> },
        ] },
      ] },
      { path: "donate", element: <Donate /> },
      { path: "contact", element: <Contact /> },
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
