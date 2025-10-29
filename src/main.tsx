import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { pdfjs  } from 'react-pdf';
import './main.css'

import { ThemeProvider } from './context/ThemeProvider'

import Layout from './components/Layout'

import HomePage from './pages/home/Home'

import Games_BlockyPatrolPage from './pages/games/BlockyPatrol'
import Games_IsoRacerPage from './pages/games/IsoRacer'

// import Console_AboutPage from './pages/tools/console/about/About'
// import Console_HowToUsePage from './pages/tools/console/how-to-use/HowToUse'
// import Console_BaseCommandsPage from './pages/tools/console/base-commands/BaseCommands'
// import Console_OwnCommandsPage from './pages/tools/console/own-commands/OwnCommands'

import ResumePage from './pages/resume/Resume'

import DonatePage from './pages/donate/Donate'
import ContactPage from './pages/contact/Contact'

import ErrorPage from './pages/error/Error'

import MatrixOperations from './pages/projects/python/numerical-algorithms/MatrixOperations'
import IterativeMethods from './pages/projects/python/numerical-algorithms/IterativeMethods'
import InterpolationMethods from './pages/projects/python/numerical-algorithms/InterpolationMethods'
import IntegrationMethods from './pages/projects/python/numerical-algorithms/IntegrationMethods'
import ExactMethods from './pages/projects/python/numerical-algorithms/ExactMethods'
import DiscreteMethodsForSolvingDiff from './pages/projects/python/numerical-algorithms/DiscreteMethodsForSolvingDiff'
import ApproximationMethods from './pages/projects/python/numerical-algorithms/ApproximationMethods'
import ApproximateSolution from './pages/projects/python/numerical-algorithms/ApproximateSolution'

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
      // { path: "tools", children: [
      //   { path: "console", children: [
      //     { path: "about", element: <Console_AboutPage /> },
      //     { path: "how-to-use", element: <Console_HowToUsePage /> },
      //     { path: "basic-commands", element: <Console_BaseCommandsPage /> },
      //     { path: "own-commands", element: <Console_OwnCommandsPage /> },
      //   ] },
      // ] },
      { path: "projects", children: [
        // { path: "unity", children: [
        //   { path: "inventory-system", children: [
        //     { path: "about", element: <div/> },
        //     { path: "how-to-use", element: <div/> },
        //   ]},
        // ] },
        // { path: "dotnet-c#", children: [
        //   { path: "travel-agency", children: [
        //     { path: "about", element: <div/> },
        //     { path: "how-to-use", element: <div/> },
        //   ]},
        // ] },
        // { path: "c++", children: [
        //   { path: "console-application", children: [
        //     { path: "about", element: <div/> },
        //     { path: "how-to-use", element: <div/> },
        //   ]},
        // ] },
        { path: "python", children: [
          { path: "numerical-algorithms", children: [
            { path: "matrix-operations", element: <MatrixOperations/> },
            { path: "exact-methods", element: <ExactMethods/> },
            { path: "interpolation-methods", element: <InterpolationMethods/> },
            { path: "approximation-methods", element: <ApproximationMethods/> },
            { path: "iterative-methods", element: <IterativeMethods/> },
            { path: "approximate-solution", element: <ApproximateSolution/> },
            { path: "integration-methods", element: <IntegrationMethods/> },
            { path: "discrete-methods-for-solving-diff", element: <DiscreteMethodsForSolvingDiff/> },
          ]},
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
