import '../styles/navbar.css'
import logo from '../assets/images/logo.jpg';

function Navbar() {
    return (
        <div className="navbar">
            <div className="nav-left">
                <img className='logo' src={logo} alt="" />
                <h1>TrackMate</h1>
            </div>
            <div className="nav-right"></div>
        </div>
    );
}
export default Navbar