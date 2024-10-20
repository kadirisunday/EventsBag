import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Header(){
    return(  
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top" data-navbar-on-scroll="data-navbar-on-scroll">
      <div class="container"><a class="navbar-brand d-inline-flex" href="index.html"><img class="d-inline-block" src="assets/img/gallery/logo.svg" alt="logo" /><span class="text-1000 fs-3 fw-bold ms-2 text-gradient">Eventsbag</span></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"> </span></button>
        <div class="collapse navbar-collapse border-top border-lg-0 my-2 mt-lg-0" id="navbarSupportedContent">
          
          <form class="d-flex mt-4 mt-lg-0 ms-lg-auto ms-xl-0">
            <div class="input-group-icon pe-2"><i class="fas fa-search input-box-icon text-primary"></i>
              <input class="form-control border-0 input-box bg-100" type="search" placeholder="Search Events" aria-label="Search" />
              {/* <button class="btn btn-white shadow-warning text-warning" type="submit"> <i class="fas fa-user me-2"></i>Login</button> */}
            </div>
            <button class="btn btn-white shadow-warning" type="submit"> <i class="fas fa-user me-2"></i>Find Events</button>
            <button class="btn btn-white shadow-warning" type="submit"> <i class="fas fa-user me-2"></i>Create Events</button>
            <button class="btn btn-white shadow-warning" type="submit"> <i class="fas fa-user me-2"></i>Find My Ticket</button>
            <button class="btn btn-white shadow-warning text-success" type="submit"> <i class="fas fa-user me-2"></i>Login</button>
            <button class="btn btn-white shadow-warning text-danger" type="submit"> <i class="fas fa-user me-2"></i>Sign Up</button>
          </form>
        </div>
      </div>
    </nav>
        
    )
}