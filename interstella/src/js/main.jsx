import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import '../css/root/reset.css'
import '../css/root/main.css'
import '../css/root/media-queries.css'
import Home from './page/Home';
import ServiceOutlet from './component/ServiceOutlet';
import Debugger from './page/Debugger';

const productionMode = false
export const ENDPOINT =  productionMode ? 'https://interstellabackend.vercel.app' : 'http://localhost:3000'

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

const router = createBrowserRouter(routes, {basename: '/interstella/'})
const root = createRoot(document.getElementById('root'))

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)