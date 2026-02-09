import React, {useState} from 'react';




export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("Upper case was clicked")
        let newText = text.toUpperCase();
        setText(newText);
        //
    }

    const handleLowClick = () => {
        console.log("Lower case was clicked")
        let newText = text.toLowerCase();
        setText(newText);
        //
    }

    const handleOnchange = (event) => {
        console.log("On change");
        setText(event.target.value);
    }

    const handleclear = () => {
        let newText = '';
        setText(newText);
        console.log("Text cleared");
    }

    const [text, setText] = useState("Enter text here");


    return (
        <div>
        <div className="container my-3">
            <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.title}</label>
            <textarea value={text} onChange={handleOnchange} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>

        </div>
        <div className="container">
            
            <button onClick={handleUpClick} type="button" className="btn btn-primary mx-3">Convert to Uppercase</button>
            <button onClick={handleLowClick} type="button" className="btn btn-primary mx-3">Convert to Lowercase</button>
            <button onClick={handleclear} type="button" className="btn btn-primary mx-3">Clear Text</button>
        </div>
        <div className="container my-3">
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
            </div>



        </div>
    )

}

