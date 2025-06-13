import '../styles/footer.css';
import visa from '../assets/images/Visa.png';
import payPal from '../assets/images/PayPal.png';
import brandAmex from '../assets/images/brand-amex_3x.png';
import brandChinaunionPay from '../assets/images/brand-chinaunionpay_3x.png';
import brandJcb from '../assets/images/brand-jcb_3x.png';
import brandMasterCard from '../assets/images/brand-mastercard_3x.png';
import diners from '../assets/images/Diners.png';
import discover from '../assets/images/Discover.png';

function Footer({sideBar}) {
    return (<>
        <footer className={`footer ${sideBar ? '' : 'footer-width-change'}`}>
            <div className="box">
                <div className="top">
                    <div className="top-left">
                        <a href=""><h4>Instagram</h4></a>
                        <a href=""><h4>Facebook</h4></a>
                        <a href=""><h4>Twitter</h4></a>
                        <a href=""><h4>Tiktok</h4></a>
                        <a href=""><h4>YouTube</h4></a>
                    </div>
                    <div className="middle"></div>
                    <div className="top-right">
                        <a href=""><h4>Terms & Conditions</h4></a>
                        <a href=""><h4>Shipping & Returns</h4></a>
                        <a href=""><h4>Privacy Policy</h4></a>
                    </div>
                </div>
                <div className="bottom">
                    <div className="bottom-left">
                        <h4>&copy; 2025 by Atharva Nevgi</h4>
                    </div>
                    <div className="bottom-right">
                            <img src={visa} alt="" />
                            <img src={brandMasterCard} alt="" />
                            <img src={brandChinaunionPay} alt="" />
                            <img src={brandJcb} alt="" />
                            <img src={brandAmex} alt="" />
                            <img src={discover} alt="" />
                            <img src={diners} alt="" />
                            <img src={payPal} alt="" />
                    </div>
                </div>
            </div>
        </footer>
    </>);
}
export default Footer