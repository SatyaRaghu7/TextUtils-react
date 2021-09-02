import React from 'react'
import '../style/Footer.css';

export default function footer(props){
    let author = {
        color: 'hotpink',
        fontSize: '17px'
    }
    return(
        <footer className={`footer footer-${props.mode}`}>
            <p><span>&copy;CopyRight 2021-{new Date().getFullYear() +1}</span><br></br>All Rights Reserved.</p>
            <p>Created by <span style={author}>Satya</span></p>
        </footer>
    )
}