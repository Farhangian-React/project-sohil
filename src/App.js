import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Products from './Product/Products';
import "./App.css";

import {CartProvider} from './Shared/Cart-Context';

function App() {
  return (
    <>     <CartProvider>
             <div className="content">
            <Routes>
            <Route path="/"  element={<Products/>} />
        </Routes>
        </div>
        </CartProvider>
    </>
  );
}

export default App;
