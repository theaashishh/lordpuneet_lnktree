import React from "react";
import bgimg from '../assets/bgimg.webp'
import Pfpicture from '../assets/9.png'



function Lnktree() {
    return (
        <>
            <div className='main_container'>
                <div className='bg_img'>
                    <img className='bgImg' src={bgimg} />
                </div>
                <div className="info_container">
                    <div className="profile_picture">
                        <img className='pfpicture' src={Pfpicture} />
                    </div>
                    <h1>@puneetsuper_starrrr</h1>
                </div>

                {/* link container */}

                <div className="main_lnk_container">
                    <div className="insta-lnk lnk-box">
                        <div className="icon-box">
                            <img src={bgimg}  />
                        </div>
                        <h1 className="title">Instagram</h1>
                        <span></span>
                    </div>

                    <div className="yt-lnk lnk-box">
                        <div className="icon-box">
                            <img src={bgimg}  />
                        </div>
                        <h1 className="title">Youtube</h1>
                        <span></span>
                    </div>

                    <div className="website-lnk lnk-box">
                        <div className="icon-box">
                            <img src={bgimg}  />
                        </div>
                        <h1 className="title">Lordpuneet Site</h1>
                        <span></span>
                    </div>

                    <div className="bb-news-lnk lnk-box">
                        <div className="icon-box">
                            <img src={bgimg}  />
                        </div>
                        <h1 className="title">BB OTT News</h1>
                        <span></span>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Lnktree;