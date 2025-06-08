import '../styles/trackMateXe.css';
import watchWhite from '../assets/images/watchWhite.png';
import watchBlack from '../assets/images/watchBlack.png';
import watchBlue from '../assets/images/watchBlue.png';
import watchPurple from '../assets/images/watchPurple.png';
import watchCyan from '../assets/images/watchCyan.png';
import smallWatchWhite from '../assets/images/smallWatchWhite.png';
import smallWatchBlack from '../assets/images/smallWatchBlack.png';
import smallWatchBlue from '../assets/images/smallWatchBlue.png';
import smallWatchPurple from '../assets/images/smallWatchPurple.png';
import smallWatchCyan from '../assets/images/smallWatchCyan.png';

import { useState } from 'react';

function TrackmateXe() {
    const smallWatchImg = [smallWatchWhite, smallWatchBlack, smallWatchBlue, smallWatchPurple, smallWatchCyan];
    const watchImg = [watchWhite, watchBlack, watchBlue, watchPurple, watchCyan];
    
    const [img, setImg] = useState(0);
    let currImg = watchImg[img];

    let watchAmount = 85;
    let selectColor = 'White';

    return (
        <div className='container trackMate'>
            <div className="content">
                <div className="content-left">
                    <div className="left-watchImg">
                        <img src={currImg} alt="" />
                    </div>
                    <div className="watchNav">
                        <div className="watchNavInner">
                            {
                                smallWatchImg.map((item, index) => {
                                    return (<>
                                        <div className={`watchInner ${img === index ? "watchBorder" : "watch"}`} key={index}>
                                            <button onClick={()=>  setImg(index)}><img src={item} alt=""/></button>
                                        </div>
                                    </>
                                    );
                                }
                                )}
                        </div>
                    </div>
                    <div className="watchInfo">
                        <p>
                           I'm a product description.
                           I'm a great place to add more details about your product such as sizing, material, 
                           care instructions and cleaning instructions.
                        </p>
                    </div>
                </div>
                <div className="content-right">
                    <h4>0.4 TrackMate XE</h4>
                    <p>SKU: 0001</p><br/>
                    <p><b>${watchAmount}.00</b></p><br/>
                    <p>Color: {selectColor}*</p>
                    <div className="colorPalette">
                        <div className="palette white"></div>
                        <div className="palette black"></div>
                        <div className="palette blue"></div>
                        <div className="palette purple"></div>
                        <div className="palette torquoise"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default TrackmateXe