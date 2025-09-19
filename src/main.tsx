import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { pdfjs  } from 'react-pdf';
import './main.css'

import { ThemeProvider } from './context/ThemeProvider'

import Layout from './components/Layout'

import HomePage from './pages/home/Home'

import Games_BlockyPatrolPage from './pages/games/blocky-patrol/BlockyPatrol'
import Games_IsoRacerPage from './pages/games/iso-racer/IsoRacer'

import Console_AboutPage from './pages/tools/console/about/About'
import Console_HowToUsePage from './pages/tools/console/how-to-use/HowToUse'
import Console_BaseCommandsPage from './pages/tools/console/base-commands/BaseCommands'
import Console_OwnCommandsPage from './pages/tools/console/own-commands/OwnCommands'

import ResumePage from './pages/resume/Resume'

import DonatePage from './pages/donate/Donate'
import ContactPage from './pages/contact/Contact'

import ErrorPage from './pages/error/Error'

const router = createBrowserRouter(
  [{
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "games", children: [
        { path: "blocky-patrol", element: <Games_BlockyPatrolPage /> },
        { path: "iso-racer", element: <Games_IsoRacerPage /> },
      ] },
      { path: "tools", children: [
        { path: "console", children: [
          { path: "about", element: <Console_AboutPage /> },
          { path: "how-to-use", element: <Console_HowToUsePage /> },
          { path: "basic-commands", element: <Console_BaseCommandsPage /> },
          { path: "own-commands", element: <Console_OwnCommandsPage /> },
        ] },
      ] },
      { path: "resume", element: <ResumePage /> },
      { path: "donate", element: <DonatePage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "*", element: <ErrorPage /> },
    ]
  }],
  {
    // basename: "/Tools-Assets/",
  }
);


pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const rootElement = document.getElementById('root') as HTMLElement;

createRoot(rootElement).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router}/>
    </ThemeProvider> 
  </StrictMode>,
)
