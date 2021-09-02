import React from 'react';
import '../style/about.css'

export default function About(props) {
    return (
        <div className={`aboutContainer aboutContainer-${props.mode}`}>
            <p>about</p>
        </div>
    )
}