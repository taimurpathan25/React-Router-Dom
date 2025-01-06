import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import {AllMedicine} from './pages/AllMedicine';
import Contact from './pages/Contact';
import AppLayout from './components/layout/AppLayout';
import DefaultPage from './pages/DefaultPage';


const App = () => {
  document.title = 'React Router Dom';

  // 1st way for Router
  const router = createBrowserRouter([
    {
      path:'/',
      element:<AppLayout/>,
      errorElement:<DefaultPage/>,

      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'about-us',
          element:<About/>
        },
        {
          path:'all-medicine',
          element:<AllMedicine/>
        },
        {
          path:'contact-us',
          element:<Contact/>
        }
      ]
    },
    
  ])

  // 2nd way for Router
  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route>
  //       <Route path='/' element={<Home/>}/>
  //       <Route path='/about' element={<About/>}/>
  //       <Route path='/movie' element={<Movie/>}/>
  //       <Route path='/contact' element={<Contact/>}/>
  //       <Route/>
  //     </Route>
  //   )
  // )
  return (
  <>
  <RouterProvider router={router}/>
  </>
  )
}

export default App;