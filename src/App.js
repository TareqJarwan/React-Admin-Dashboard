import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Navbar, Sidebar } from './components';
import { Home, UserList, UserDetails, NewUser, ProductDetails, NewProduct, ProductList } from './pages';

import './App.styles.scss';

const App = () => {
    return (
        <Router>
            <Navbar />
            <div className="container">
                <Sidebar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/users" element={<UserList />} />
                    <Route exact path="/user/:userId" element={<UserDetails />} />
                    <Route exact path="/new-user" element={<NewUser />} />
                    <Route exact path="/products" element={<ProductList />} />
                    <Route exact path="/product/:productId" element={<ProductDetails />} />
                    <Route exact path="/new-product" element={<NewProduct />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App
