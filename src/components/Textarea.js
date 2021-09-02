import React, {useState} from 'react';
import '../style/textarea.css';

export default function Textarea(props){

    const upperCase = ()=>{
        setText(text.toUpperCase());
    }

    const lowerCase =()=>{
        setText(text.toLowerCase());
    }

    const sentenceCase =()=>{
        let a = text.split(/[.!?]/g);
        // let a = text.replace(/[?!]/g, '.').split(/[.!?]/g);
        let newText = '';
        for (let i = 0; i < a.length; i++) {
            a[i] = '.' + a[i].trim();
            if (typeof a[i][1] !== 'undefined'){
                a[i] = a[i].replace(/[.]/g, '');
                if (i<a.length-1){
                    a[i] = a[i][0].toUpperCase()+a[i].slice(1).toLowerCase()+'. ';
                    newText += a[i];
                }
                else{
                    a[i] = a[a.length-1][0].toUpperCase()+a[a.length-1].slice(1).toLowerCase();
                    newText += a[i];
                }
            }
        }
        setText(newText);
    }

    const removeExtraSpaces = ()=>{
        setText(text.replace(/\s+/g, ' ').trim())
    }
    
    const copy = ()=>{
        navigator.clipboard.writeText(text);
    }
    
    const clearTextArea =()=>{
        setText('');
    }

    const handleOnChange = (event) =>{
        setText(event.target.value);
    }

    const [text, setText] = useState('');

    let wordcount = {
        fontSize: '17px'
    }

    return(
        <>
        <div className={`textarea textarea-${props.mode}`}>
            <h2>{props.heading}</h2>
            <textarea className={`mytextarea mytextarea-${props.mode}`} value={text} onChange={handleOnChange} id="myBox" rows="12"></textarea>
            <button className={`casebtn casebtn-${props.mode}`} disabled={text.length===0} onClick={upperCase}>Upper Case</button>
            <button className={`casebtn casebtn-${props.mode}`} disabled={text.length===0} onClick={lowerCase}>Lower Case</button>
            <button className={`casebtn casebtn-${props.mode}`} disabled={text.length===0} onClick={sentenceCase}>Sentence Case</button>
            <button className={`casebtn casebtn-${props.mode}`} disabled={text.length===0} onClick={removeExtraSpaces}>Remove Extra Spaces</button>
            <button className={`casebtn casebtn-${props.mode}`} disabled={text.length===0} onClick={copy}>Copy</button>
            <button className={`casebtn casebtn-${props.mode}`} disabled={text.length===0} onClick={clearTextArea}>Clear</button>
        </div>
        <div className={`textarea textarea-${props.mode}`}>
            <p style={wordcount}>Total Words <span>{text.replace(/\s+/g, ' ').split(' ').filter((e)=>{return e.length!==0}).length}</span> and Letters <span>{text.length}</span></p>
            <p>Minutes to read: <span>{text.replace(/\s+/g, ' ').split(' ').filter((e)=>{return e.length!==0}).length/250}</span></p>
        </div>
        <div className={`textarea textarea-${props.mode}`}>
            <h3>Preview</h3>
            <p className="preview">{text.length>0?text:'Type Something To get Preview'}</p>
        </div>
        </>
    )
}