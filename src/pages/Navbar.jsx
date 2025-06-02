import '../styles/navbar.css'
import logo from '../assets/images/logo.jpg';

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
                <a href='#'><h3>FAQ</h3></a>
                <a href='#'><i class="bi bi-person-circle"></i></a>
                <a href='#'><h3 className='login'>Log In</h3></a>
                <a href='#'><i class="bi bi-bag-fill"></i></a>
                <a href='#'><button className='buyNow'>Buy Now</button></a>
            </div>
        </div>
    );
}
export default Navbar