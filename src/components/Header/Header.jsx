import React from 'react';
import s from './Header.module.css'; 

const Header = () => {
    return  <header className={s.header}>  
    <div className="border_bottom_grey font_086em display_none">
        <div className="inline">
                    Помощь семьям и друзьям при потере любимого умершего
        </div>  
    </div>  
    <div className="logo">
        <div className="logo_img">
            <a href="https://wikirip.site/">
                <img src="logo.png" className="logo_main" title="Найти могилу - WikiRIP" alt="Найти могилу - WikiRIP" />
            </a>
        </div>
        <div className="contein_logo_text">
            <a href="https://wikirip.site/" title="Найти могилу - WikiRIP">
                <span className="logo_text">WikiRiP</span>
                <span className="logo_slogan"><h1>планы кладбищ России и Украины</h1></span>
            </a>
        </div>
    </div> 
</header>  
}

export default Header;