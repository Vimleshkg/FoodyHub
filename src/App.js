import './App.css';
import Header from './Components/Header'
import Body from './Components/Body';
import {createBrowserRouter, Outlet} from 'react-router-dom'
import Foot from './Components/Foot';
import RestaurantData from './Components/RestaurantData';
import {lazy, Suspense} from 'react'
import ShimerUI from './Components/ShimerUI';
import UserContext from './Components/utils/UserContext';
import store from './Components/utils/ReduxStore'
import { Provider } from 'react-redux';
import Cart from './Components/Cart';


const About = lazy(()=> import("./Components/about"));

const router = createBrowserRouter(
  [
    {
      path:"/",
      element:<App/>,
      children: [
        {
          path:'/',
          element:<Body/>
        },
        {
          path:'/about',
          element:<Suspense fallback={<ShimerUI/>}> <About/> </Suspense>
        },
        {
          path:'/restaurantData/:resid',
          element:<RestaurantData/>
        },
        {
          path:'/Cart',
          element:<Cart/>
        },
        
      ]
    }
  ]
)

function App() {
  return (
    <div className ="App">
     
    <Provider store={store}>
   
      <Header />
      <Outlet />
      <Foot   />
     

      </Provider>

    </div>
  );
}




export default App;
export {router};
