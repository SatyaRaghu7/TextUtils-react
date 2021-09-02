import React from 'react';
// import {Link} from "react-router-dom";
import '../style/menulines.css';
import '../style/Mode.css';

export default function Navbar(props) {

    function show(){
        if (window.innerWidth<='700'){
            let navmenu = document.getElementById('nav').firstElementChild.children;
            let menuline = document.getElementById('nav').lastElementChild;
            menuline.classList.toggle('change');
            
            if (navmenu[1].style.display!=='block'){
                document.getElementById("nav").style.height = '200px';
                for (let i = 1; i < navmenu.length; i++) {
                    navmenu[i].style.display = 'block';
                }
            }
            else {
                document.getElementById("nav").style.height = '50px';
                for (let i = 1; i < navmenu.length; i++) {
                navmenu[i].style.display = 'none';
            }
            }
        }
    }

    document.addEventListener('mouseup', function(e){
        if (window.innerWidth<='700'){

            let navmenu = document.getElementById('nav').firstElementChild.children;
            let nav = document.getElementById('nav');
            let menuline = document.getElementById('nav').lastElementChild;
            if (!nav.contains(e.target)){
                nav.style.height = '50px';
                menuline.classList.remove('change');
                for (let i = 1; i < navmenu.length; i++) {
                    navmenu[i].style.display = 'none';
                }
            }
        }
    })

    return (
        <div className={`navbar nav-${props.mode}`} id="nav">
            <div>
                <button className="brand">{props.logo}</button>
                <a href="/#" onClick={show}>Home</a>
                {/* <Link to="/" onClick={show}>Home</Link>
                <Link to="/about" onClick={show}>About</Link> */}
                <div className="modeToggle" >
                    <label className="switch" id="switch">
                        <input type="checkbox" onClick={props.toggleMode}/>
                        <div className="slider round"></div>
                        <span className={`modeText modeText-${props.mode}`}>{props.modeText}</span>
                    </label>
                </div>
            </div>
            <div className="menulines" onClick={show}>
                <div className={`first ${props.mode}`}></div>
                <div className={`second ${props.mode}`}></div>
                <div className={`third ${props.mode}`}></div>
            </div>
        </div>
    )
}