import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Layout from './Layout.jsx';
import Home from './Component/Home.jsx';
import About from './Component/About.jsx';
import Contact from './Component/Contact.jsx';
import Github, { githubInfoLoader } from './Component/Github.jsx';
import User from './User.jsx';

// const router=createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"contact",
//         element:<Contact/>
//       },
//        {
//         path:"github",
//         element:<Github/>
//       }
//     ]
//   }
// ])

const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
    <Route path='' element={<Home/>}/>
    <Route path='about' element={<About/>}/>
     <Route path='contact' element={<Contact/>}/>
      <Route path='user/:id' element={<User/>}/>
      <Route
      loader={githubInfoLoader}
      path='github'
      element={<Github/>}
      />
    </Route>
  ))

createRoot(document.getElementById('root')).render(
  <StrictMode>
   
     <RouterProvider router={router}/>
    
  </StrictMode>,
)
