import { Routes, Route } from 'react-router-dom';
import Menubar from './components/Menubar/Menubar';
import Products from './components/Products/Products';
import Categories from './components/Categories/Categories';
import Orders from './components/Orders/Orders';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
import Information from './components/Information/Information';
import Registration from './components/Registration/Registration';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PrivateRouteLogin from './components/PrivateRouteLogin/PrivateRouteLogin';
import Prof from './components/Prof/Prof';

function App() {


  return (
    <div>
      <Menubar></Menubar>

      <Routes>

        <Route path='/' element={<Products></Products>}>

        </Route>
        <Route path='/home' element={<Products></Products>}>

        </Route>

        <Route path='/categories' element={<Categories></Categories>}>

        </Route>
        <Route path='/orders' element={<Orders></Orders>}>

        </Route>

        <Route path='registration' element={<Registration></Registration>}>

        </Route>
        <Route path='/forgotPassword' element={<ForgotPassword></ForgotPassword>}>

        </Route>

        <Route path='/login' element={<PrivateRouteLogin><Login></Login></PrivateRouteLogin>} />

        <Route path='/profile' element={<PrivateRoute><Prof /></PrivateRoute>} />


        <Route path="/productInformation/:productId" element={<Information></Information>}>

        </Route>
        <Route path='*' element={<NotFound></NotFound>}>

        </Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
