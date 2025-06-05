import '../styles/footer.css';

function Footer() {
    return (<>
        <footer>
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
                    <div className="bottom-left"></div>
                    <div className="bottom-right"></div>
                </div>
            </div>
        </footer>
    </>);
}
export default Footer