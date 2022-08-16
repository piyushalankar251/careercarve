import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './pages/login'
import SignUp from './pages/signup'
import Home from './pages/home'
import T1 from './pages/t1'
import T2 from './pages/t2'
import T3 from './pages/t3'
function App() {
  return (
    <><Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <div className="navbar-header">
              <Link className="navbar-brand" to={'/'}>
                <img src="./home_cc.png" alt="CareerCrave"></img>
              </Link>
            </div>
            
          </div>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-in'}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-up'}>
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
        </nav>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/t1" element={<T1 />} />
              <Route path="/t2" element={<T2 />} />
              <Route path="/t3" element={<T3 />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router><footer className="navbar navbar-expand-lg navbar-light fixed-bottom foot"><div>Developed with ❤️ by Piyush Alankar</div></footer></>
  )
}
export default App