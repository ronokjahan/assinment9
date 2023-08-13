import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Home from './components/Home'
import App from './App'
import About from './components/About'
import ErrorPage from './components/ErrorPage'
import Shop from './components/Shop'
import Cart from './components/Cart'
import { productsAndCartData } from './loaders/getCart&ProductsData'
import Job from './components/Cards/Job/Job'
import JobDeatils from './components/Cards/Job/JobDeatils'
import ButtonDetails from './components/ButtonDetails'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    loader: productsAndCartData,
    children: [
      { path: '/', element: <Home /> },
      { path: '/shop', element: <Shop /> },
      { path: '/cart', element: <Cart /> },
      { path: '/about', element: <About /> },
     
      { path: '/Job', element: <Job></Job>,
    loader:()=>fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
    },
    {
      path:'/job/:jobId',
      element:<JobDeatils></JobDeatils>,
      loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.jobId}`)
      
      
    },
    {
      path:'/',
      element:<ButtonDetails></ButtonDetails>,
      loader:()=>fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
    }
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
    <Toaster />
  </>
)
