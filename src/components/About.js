import React from 'react';
import '../style/about.css'

export default function About(props) {
    return (
        <div className={`aboutContainer aboutContainer-${props.mode}`}>
            <div>
                <h2>About Us</h2><br/>
            </div>
            <div>
                <h2>TextUtils - Word counter</h2><hr/>
                <p>TextUtils is a words counter, characters counter and it show real time preview of text you type. TextUtils gives you a way to analyze your text quickly.</p><br/>
                <h3>Easy to use</h3><hr/>
                <p>It is very easy to use TextUtils just by click on button given below the text area.</p><br/>
                <h4>Why I use TextUtils</h4><hr/>
                <p>Because You are my friend <strong>:)</strong> LOL!</p>
                <p>You can convert your text UPPERCASE, lowercase, Sentence case, Remove Extra Spaces for a given text just by a single click. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/character limit</p><br/>
                <p>Special Thanks To <b>Harry Bhai @codewithharry</b></p><hr/><hr/>
            </div>
        </div>
    )
}