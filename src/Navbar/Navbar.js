import React   from 'react'
import  './Navbar.css'
export  default function  Navbar () {
    return (
        <div className="nav-background">
            <div className="nav-container">

                <nav>
                    <ul className="nav-ul">
                        <li><a className="nav-link active-link" href="/#">Home</a></li>
                        <li><a className="nav-link" href="/#">News</a></li>
                        <li><a className="nav-link" href="/#">Contact</a></li>
                        <li><a className="nav-link" href="/#">About</a></li>

                    </ul>
                </nav>
                <header className="nav-header">
                    <h1><a className="nav-logo" href="/#"> Cando</a></h1>
                    <h3><a className="nav-logo" href="/#"> School for pottery</a></h3>
                </header>
            </div>
        </div>
    )
}