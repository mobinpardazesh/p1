import './Product.css'
import React   from 'react'

export default function Product () {
    return (

        <div>
            <h1>Spacial Products</h1>
            <div className="card">
                <img src="i15.png" alt="iphone 15"/>
                <h2>Apple Iphone 15 Pro</h2>
                <p className="price">$1200</p>
                <p> New Smart Phone in year 2023  </p>
                <p><button>Add to card</button></p>

            </div>
        </div>

    )
}