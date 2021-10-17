import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './Header.css'
import Mounting from './Mounting';
import Updating from './Updating';
import Unmounting from './Unmounting';

function Header() {
    return (
        <>
            <Router>
                <h2 className="text-center Heading pt-3 text-white">Component Life Cycle</h2>
                <nav className="navbar navbar-expand-lg text-white">
                    <div className="container-fluid">
                        <button className="navbar-toggler bg-warning text-center" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item mx-4">
                                    <Link className="nav-link fw-bold fs-5 text-white active" to="/">Mounting</Link>
                                </li>
                                <li className="nav-item mx-4">
                                    <Link className="nav-link fw-bold fs-5 text-white" to="/updating">Updating</Link>
                                </li>
                                <li className="nav-item mx-4">
                                    <Link className="nav-link fw-bold fs-5 text-white" to="/Unmounting">Upmounting</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <Switch>
                    <Route exact path="/" component={Mounting} />
                    <Route path="/updating" component={Updating} />
                    <Route path="/Unmounting" component={Unmounting} />
                </Switch>
            </Router>
        </>
    )
}

export default Header;
