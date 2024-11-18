import React, { useRef } from "react";
import navCss from './Nav.module.css'

function Nav() {

    const menu = useRef();
    const nav = useRef();

    const menuHandler = () => {
        menu.current.classList.toggle(navCss.showNav);

    }

    window.addEventListener('scroll', function (){
        if(window.scrollY > 100){
            nav.current.classList.add(navCss.navColor);
        }
        else{
            nav.current.classList.remove(navCss.navColor);
        }
    })

    return (
        <div className={navCss.nav_wrapper} ref={nav}>
            <div className={navCss.logo}>
                <a href="#">Munya</a>
            </div>
            <ul ref={menu}>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#service">Service</a></li>
                <li><a href="#works">Works</a></li>
                <li><a href="#news">News</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className={navCss.nav_btns}>
                <button>Hire Me <i className="ri-arrow-right-up-line"></i></button>
                <i className="ri-menu-4-line " id={navCss.bars} onClick={menuHandler}></i>
            </div>
        </div>
    )
}

export default Nav