import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navBar/navBar'
import ItemListContainer from './components/itemListContainer/itemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './components/notFound/notFound';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';
import CartComponentContext from './context/cartContext';
import Cart from './components/cart/cart';
import Order from './components/order/order';

function App() {


  return (
    <>
      <CartComponentContext>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<ItemListContainer />} />
            <Route exact path="/fakestoreapi" element={<ItemListContainer />} />
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<Order />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CartComponentContext>

    </>
  )
}

export default App