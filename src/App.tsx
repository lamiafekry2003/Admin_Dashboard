
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import { Products } from "./Pages/Products/Products";
import { Navbar } from "./Component/Navbar/Navbar";
import { Footer } from "./Component/Footer/Footer";
import { Menu }  from "./Component/Menu/Menu"
import { Login } from "./Pages/Login/Login";
import './styles/global.scss';
import { Users } from "./Pages/Users/Users";
import { Product } from "./Pages/product/Product";
import { User } from "./Pages/user/User";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient()

function App() {

  const Layout=()=>{
    return(
      <div className="main">
        <Navbar/>
        <div className="container">
          <div className="menuContainer"><Menu/></div>
          <div className="contentContainer">
          <QueryClientProvider client={queryClient}>
           <Outlet/>
          </QueryClientProvider>
            </div>
        </div>
        <Footer/>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
     path:'/' ,element:<Layout/> ,children:[
      {path:'/',element:<Home/>},
      {path:'users',element:<Users/>},
      {path:'products',element:<Products/>},
      {path:'products/:id',element:<Product/>},
      {path:'users/:id',element:<User/>}
     ]
    },
    {path:'login',element:<Login/>}
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
