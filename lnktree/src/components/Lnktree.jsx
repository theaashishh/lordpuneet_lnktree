import React from "react";
React;
import bgimg from '../assets/bgimg.webp'
import Pfpicture from '../assets/9.png'
import instaImg from '../assets/icon/insta.png'
import ytImg from '../assets/icon/youtube.avif'
import webImg from '../assets/icon/website.webp'
import newsImg from '../assets/icon/news.webp'


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
                    <a className="insta-lnk lnk-box" href='https://www.instagram.com/puneetsuper_starrrr/?hl=en' target='_blank' rel="noopener noreferrer">
                        <div className="icon-box">
                            <img src={instaImg} />
                        </div>
                        <h1 className="title">Instagram</h1>
                        <span></span>
                    </a>

                    <a className="yt-lnk lnk-box " href='https://www.youtube.com/@puneetsuperstar6150' target='_blank' rel="noopener noreferrer">
                        <div className="icon-box">
                            <img src={ytImg} />
                        </div>
                        <h1 className="title">Youtube</h1>
                        <span></span>
                    </a>

                    <a className="website-lnk lnk-box" href='https://lordpuneet.in/' target='_blank' rel="noopener noreferrer">
                        <div className="icon-box">
                            <img src={webImg} />
                        </div>
                        <h1 className="title">Lordpuneet Site</h1>
                        <span></span>
                    </a>

                    <a className="bb-news-lnk lnk-box" href='https://news.abplive.com/entertainment/ott/bigg-boss-ott-2-puneet-superstar-evicted-in-less-than-12-hours-1609865' target='_blank' rel="noopener noreferrer">
                        <div className="icon-box">
                            <img src={newsImg} />
                        </div>
                        <h1 className="title">BB OTT News</h1>
                        <span></span>
                    </a>

                </div>
            </div>
        </>
    )
}

export default Lnktree;