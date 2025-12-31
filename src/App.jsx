import {  createHashRouter, RouterProvider } from 'react-router-dom'
import './App.css'

import { Toaster } from 'react-hot-toast'
import Home from './components/Home/Home'
import Layout from './components/Layout/Layout'


function App() {

  const router = createHashRouter([
    {path:'/' , element:<Layout/> , children:[
      {index: true, element:<Home/>},
      {path: '*', element:<h1 className=' text-center text-light m-5'>not-found page</h1>},


    ]}])


  return (
    <>

    <RouterProvider router={router}/>
    <Toaster/>
    </>
  )
}

export default App
