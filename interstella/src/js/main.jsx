import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import '../css/root/reset.css'
import '../css/root/main.css'
import '../css/root/media-queries.css'
import Home from './page/Home';
import ServiceOutlet from './component/ServiceOutlet';
import Debugger from './page/Debugger';

const productionMode = true
export const ENDPOINT =  productionMode ? 'https://interstellabackend.vercel.app' : 'http://127.0.0.1:3006'

const routes = [
  {
    path: '/',
    element: <Home />,
    children: [{
      path: '/service',
      element: <ServiceOutlet />
    }],
  },
  {
    path: '/debugger',
    element: <Debugger />
  }
]

const router = createBrowserRouter(routes, { basename: '/interstella/' })

const container = document.getElementById('root')
if (!window._reactRoot) {
  window._reactRoot = createRoot(container)
}

window._reactRoot.render(
  // <StrictMode>
  <RouterProvider router={router} />
  // </StrictMode>
)