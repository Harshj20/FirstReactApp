import React, {useState} from 'react'

export default function TextArea(props) {
    const [text, setText] = useState('');
    const [copy, setCopy] = useState("Copy text");
    const changeToUppercase = (event)=>{
        event.preventDefault();
        let newText = text.toUpperCase();
        setText(newText);
    }
    const onChangeHandler = (event)=>{
        setText(event.target.value);
        setCopy("Copy text");
    }
    const changetolo =(event)=>{
        event.preventDefault();
        setText('');
    }
    const copytext = (event)=>{
        event.preventDefault();
        let copy = document.getElementById("textarea");
        copy.select();
        document.execCommand('copy');
        document.getSelection().removeAllRanges();
        setCopy("Copied");

    }
    

    return (
        <>
        <div className = "container" style={{color: props.mode==='dark'?'white':'black'}}>
        <form>
        <div className="form-group my-3">
            <h1>{props.heading}</h1>
          <textarea className="form-control " style={{backgroundColor: props.mode==='dark'?'#939393':'white', color: props.mode==='dark'?'white':'black'}}id="textarea" value={text} onChange={onChangeHandler} rows="6"></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary my-2" onClick={changeToUppercase} >Change to upperCase</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={changetolo}>Clear Text</button>
        <button disabled={text.length === 0} className="btn btn-primary my-2" onClick={copytext}>{copy}</button>    
      </form>
      </div> 
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h3>Your text Summary</h3>
        <p>{text.split(" ").filter((element) => { return element.length !== 0;}).length} words {text.length} characters</p>
        <p>{Math.floor(0.48*text.split(" ").length/60)}:{(0.48*text.split(" ").length%60).toFixed(2)} time to read</p>
      </div>
</>
   )
}
