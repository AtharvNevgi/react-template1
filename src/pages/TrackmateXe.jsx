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

    const color =['White', 'Black', 'Blue', 'Purple', 'Torquoise'];
    const [color1, setColor] = useState(0);

    let watchAmount = 85;
    let selectColor = color[color1];

    const [count, setCount] = useState(1);
    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        if(count <= 1){
            setCount(count);
        }
        else {
            setCount(count -1);
        }
    }
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
                    <p>Color: {selectColor} *</p>
                    <div className="colorPalette">
                        {
                            color.map((item, index)=>{
                                return(
                                    <>
                                        <div onClick={()=> setColor(index)} className={`palette ${item} ${color1 == index ? 'paletteSelect': 'paletteSelect1'}`} key={index}></div>
                                    </>
                                )
                            })
                        }
                    </div>
                    <p>Quantity *</p>
                    <div className="quantityCounter">
                        <button onClick={decrement} className='decrement'><i class={`bi bi-dash ${count <= 1 ? 'fade' : 'nofade'}`}></i></button>
                        <input type="text" onChange={(e)=> setCount(e.target.value)} value={count}/>
                        <button onClick={increment} className='increment'><i class="bi bi-plus"></i></button>
                    </div>
                    <br/><br/>
                    <button className='addCart'>Add to Cart</button>
                     
                </div>
            </div>
        </div>
    );
}
export default TrackmateXe