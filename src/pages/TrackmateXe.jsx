import '../styles/trackMateXe.css';
import watchWhite from '../assets/images/watchWhite.png';
import smallWatchWhite from '../assets/images/smallWatchWhite.png';
import smallWatchBlack from '../assets/images/smallWatchBlack.png';
import smallWatchBlue from '../assets/images/smallWatchBlue.png';
import smallWatchPurple from '../assets/images/smallWatchPurple.png';
import smallWatchCyan from '../assets/images/smallWatchCyan.png';
// import { useState } from 'react';

const smallWatchImg = [smallWatchWhite, smallWatchBlack, smallWatchBlue, smallWatchPurple, smallWatchCyan];
// const [border, setBorder] = useState(true);

const watchInnerBorder = () => {

}
function TrackmateXe() {
    return (
        <div className='container trackMate'>
            <div className="content">
                <div className="content-left">
                    <div className="left-watchImg">
                        <img src={watchWhite} alt="" />
                    </div>
                    <div className="watchNav">
                        <div className="watchNavInner">
                            {
                                smallWatchImg.map((item, index) => {
                                    return (<>
                                        <div className='watchInner' key={index}>
                                            <button onClick={watchInnerBorder}></button><img src={item} alt="" />
                                        </div>
                                    </>
                                    );
                                }
                                )}
                        </div>
                    </div>
                </div>
                <div className="content-right">

                </div>
            </div>
        </div>
    );
}
export default TrackmateXe