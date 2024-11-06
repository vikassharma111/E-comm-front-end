import './App.css';
import Nav from'./component/Nav';
import Footer from './component/Footer';
import Signup from './component/Signup';
import { BrowserRouter ,Routes ,Route} from 'react-router-dom';
import PrivateComponent from './component/privateComponent';
import Login from './component/login';
import AddProduct from './component/addProduct';
import Productlist from './component/productlist';
import UpdateProduct from './component/updateproduct';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Routes>
       
       <Route element ={<PrivateComponent />} >
        <Route path='/' element={<Productlist />}></Route>
        <Route path='/add' element={<AddProduct />}></Route>
        <Route path='/update/:id' element={<UpdateProduct />}></Route>
        <Route path='/logout' element={<h1>logout</h1>}></Route>
        <Route path='/profile' element={<h1>profile</h1>}></Route>
        </Route>

        <Route path='/Sign up' element={<Signup />} ></Route>
        <Route path='/login' element={<Login />} ></Route>
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;