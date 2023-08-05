import React from 'react'
import "./Navbar.css"


function HomeNavbar() {
  return (
    <div>

<header class="dark-bb">
    <nav class="navbar navbar-expand-lg">
      <a class="navbar-brand" href="/"><img src="assets/img/logo-light.svg" alt="logo" /></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#headerMenu"
        aria-controls="headerMenu" aria-expanded="false" aria-label="Toggle navigation">
        <i class="icon ion-md-menu"></i>
      </button>

      <div class="collapse navbar-collapse" id="headerMenu">
        <ul class="navbar-nav mr-auto">
         {/* <!--  <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true"
              aria-expanded="false">
              Buy Crypto
            </a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="landing-page-dark.html">Landing One</a>
              <a class="dropdown-item" href="landing-page-dark-two.html">Landing Two</a>
            </div>
          </li> --> */}

           <li class="nav-item">
            <a class="nav-link" href="#" role="button">
              Buy Crypto
            </a>
            
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#" role="button">
              Quotes
            </a>
            
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" role="button">
              Spot Trading
            </a>
            
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#" role="button">
              Futures
            </a>
            
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#" role="button">
              Deposite Treasure
            </a>
            
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#" role="button">
              Startup
            </a>
            
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#" role="button">
           User Union
            </a>
            
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" role="button">
              Notice
            </a>
            
          </li>
         
          
        </ul>
        <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link btn btn-primary login_button" href='/Login' type="button" id="button-addon2">Login</a>
          </li>
          <li class="nav-item">
          <a class="nav-link btn btn-primary" href='/Registration' type="button" id="button-addon2">Registration</a>
          </li>
        	{/* <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true"
              aria-expanded="false">
              <img src="assets/img/lock.png" width="20px" />
            </a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">abcd@gmail.com</a>
              <a class="dropdown-item" href="#">Assets</a>
              <a class="dropdown-item" href="#">Account & Security</a>
               <a class="dropdown-item" href="#">Referral & Earn</a>
               <a class="dropdown-item" href="#">Logout</a>
            </div>
          </li>  */}

        </ul>
      </div>
    </nav>
  </header>

    </div>
  )
}

export default HomeNavbar