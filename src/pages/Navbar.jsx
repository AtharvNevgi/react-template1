import '../styles/navbar.css'
import logo from '../assets/images/logo.jpg';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar">
            <div className="nav-left">

                <a href='/'><img className='logo' src={logo} alt="" /></a>
                <a href="/">
                    <h1>TrackMate</h1>
                </a>
            </div>
            <div className="nav-right">
                <NavLink to="/"><i className="bi bi-person-circle"></i></NavLink>
                <NavLink to="/"><h3>FAQ</h3></NavLink>
                <NavLink to="/"><h3 className='login'>Log In</h3></NavLink>
                <NavLink to="/"><i className="bi bi-bag-fill"></i></NavLink>
                <NavLink to="/"><button className='buyNow'>Buy Now</button></NavLink>
            </div>
        </div>
    );
}
export default Navbar