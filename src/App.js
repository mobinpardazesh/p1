
import React   from 'react'
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import Product from "./Product/Product";
import './App.css';


export default function App() {
    return (
        <div>

            <Navbar></Navbar>
            <Header></Header>
            <div className="container">
                <Product></Product>
                <Product></Product>
                <Product></Product>
            </div>



        </div>
    )
}

