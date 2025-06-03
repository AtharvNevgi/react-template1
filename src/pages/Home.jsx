import Navbar from "./Navbar.jsx";
import "../styles/home.css";
import watchImg from '../assets/images/watch.png';

function Home() {
  return (
    <>
      <Navbar />
      <div className="main">
        <div className="main-left">
          <h3 className="headingTop">Own Your Daily Routine</h3>
          <h1 className="heading">0.4 TrackMate XE</h1>
          <h3>A health tracker that motivates you every step of the way</h3>
          <button className="buyNow buttonHome">Buy Now</button>
        </div>
        <div className="main-right">
          <img src={watchImg} alt="" />
        </div>
      </div>
    </>
  );
}
export default Home;
