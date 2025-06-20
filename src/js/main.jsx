import { StrictMode } from 'react'
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import '../css/root/reset.css'
import '../css/root/main.css'
import '../css/root/media-queries.css'
import Home from './page/Home';
import ServiceOutlet from './component/ServiceOutlet';

const routes = [
  {
    path: '/',
    element: <Home />,
    children: [{
      path: '/service',
      element: <ServiceOutlet />
    }],
  },
]

const router = createBrowserRouter(routes, {basename: '/interstella/'})

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)