import { Home, ListProduct, DetailProduct, Profile, 
  Login, Register, Payment } from "@pages";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/listproduct' element={<ListProduct />} />
        <Route path='/detailproduct/:id' element={<DetailProduct />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/payment/:id' element={<Payment />} />
      </Routes>
      <ToastContainer position="top-center"/>
    </BrowserRouter>
  );
};

export default App;
