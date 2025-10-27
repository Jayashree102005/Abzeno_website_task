import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter , RouterProvider} from 'react-router-dom';
import Home from './home components/Home';
import Contact from './contact components/Contact';
import Aboutus from './aboutus components/Aboutus';
import Service from './service components/Service';
const router=createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/Contact',
    element:<Contact/>
  },
  {
    path:'/Aboutus',
    element:<Aboutus/>
  },
  {
    path:'/Service',
    element:<Service/>
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
