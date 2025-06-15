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

function TrackmateXe({sideBar}) {
    const smallWatchImg = [smallWatchWhite, smallWatchBlack, smallWatchBlue, smallWatchPurple, smallWatchCyan];
    const watchImg = [watchWhite, watchBlack, watchBlue, watchPurple, watchCyan];

    const [img, setImg] = useState(0);
    let currImg = watchImg[img];

    const color = ['White', 'Black', 'Blue', 'Purple', 'Torquoise'];
    const [color1, setColor] = useState(0);

    let watchAmount = 85;
    let selectColor = color[color1];

    const [count, setCount] = useState(1);
    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        if (count <= 1) {
            setCount(count);
        }
        else {
            setCount(count - 1);
        }
    }
    const [openAccordion, setOpenAccordion] = useState(-1);

    const handleAccordionClick = (index) => {
        setOpenAccordion(openAccordion === index ? -1 : index);
    };
    return (
        <div className={`container trackMate ${sideBar ? '' : 'trackMate-width-change'}`}>
            <div className="content">
                <div className="content-left">
                    <div className="left-watchImg">
                        <img src={currImg} alt="" />
                    </div>
                    <div className="watchNav">
                        <div className="watchNavInner">
                            {
                                smallWatchImg.map((item, index) => {
                                    return (
                                        <div className={`watchInner ${img === index ? "watchBorder" : "watch"}`} key={index}>
                                            <button onClick={() => setImg(index)}><img src={item} alt="" /></button>
                                        </div>
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
                    <p>SKU: 0001</p><br />
                    <p><b>${watchAmount}.00</b></p><br />
                    <p>Color: {selectColor} *</p>
                    <div className="colorPalette">
                        {
                            color.map((item, index) => {
                                return (
                                        <div onClick={() => setColor(index)} className={`palette ${item} ${color1 == index ? 'paletteSelect' : 'paletteSelect1'}`} key={index}></div>
                                )
                            })
                        }
                    </div>
                    <p>Quantity *</p>
                    <div className="quantityCounter">
                        <button onClick={decrement} className='decrement'><i className={`bi bi-dash ${count <= 1 ? 'fade' : 'nofade'}`}></i></button>
                        <input type="text" onChange={(e) => setCount(e.target.value)} value={count} />
                        <button onClick={increment} className='increment'><i className="bi bi-plus"></i></button>
                    </div>
                    <br /><br />
                    <button className="addCart">Add to Cart</button>
                    <div className='trackMate-accordion'>

                        <button className="accordion" onClick={() => handleAccordionClick(0)}>Product Info <i className={`bi ${openAccordion === 0 ? 'bi-dash' : 'bi-plus'}`}></i></button>
                        <div className="panel" style={{ display: openAccordion === 0 ? 'block' : 'none' }}>
                            <p>
                                I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions.
                                This is also a great space to write what makes this product special and how your customers can benefit from this item.
                            </p>
                        </div>

                        <button className="accordion" onClick={() => handleAccordionClick(1)}>Return & Refund Policy <i className={`bi ${openAccordion === 1 ? 'bi-dash' : 'bi-plus'}`}></i></button>
                        <div className="panel" style={{ display: openAccordion === 1 ? 'block' : 'none' }}>
                            <p>
                                I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase.
                                Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.
                            </p>
                        </div>

                        <button className="accordion" onClick={() => handleAccordionClick(2)}>Shipping Info <i className={`bi ${openAccordion === 2 ? 'bi-dash' : 'bi-plus'}`}></i></button>
                        <div className="panel" style={{ display: openAccordion === 2 ? 'block' : 'none' }}>
                            <p>
                                I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost.
                                Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.
                            </p>
                        </div>
                        <div className="socials">
                            <i className="bi bi-facebook"></i>
                            <i className="bi bi-pinterest"></i>
                            <i className="bi bi-whatsapp"></i>
                            <i className="bi bi-twitter-x"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default TrackmateXe