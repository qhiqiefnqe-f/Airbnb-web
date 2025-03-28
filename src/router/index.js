import Demo from "@/views/demo"
import React from "react"
import { Navigate } from "react-router-dom"

const Home = React.lazy(() => import('@/views/home'))
const Entire = React.lazy(() => import('@/views/entire'))
const Detail = React.lazy(() => import('@/views/detail'))
const NotFount = React.lazy(() => import('@/views/notfount'))

const routes = [
  {
    path: '/',
    element: <Navigate to='/home' />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/detail',
    element: <Detail />
  },
  {
    path: '/entire',
    element: <Entire/>
  },
  {
    path: '/demo',
    element: <Demo/>
  },
  {
    path: '*',
    element: <NotFount/>
  }
]

export default routes