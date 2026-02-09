import React, {useState} from 'react';

export default function About() {
    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white',
    });

    const [btnText, setBtnText] = useState("Enable Dark Mode");

    const toggleStyle = () => {
        if (myStyle.color === 'black') {
            setMyStyle({
                color: 'white',
                backgroundColor: 'black',
                border: '1px solid white'
            });
        } else {
            setMyStyle({
                color: 'black',
                backgroundColor: 'white',
            });
        }
    }



    return (
        <div className="container" style={myStyle}>
        <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<button onClick={toggleStyle} type="button" className="btn btn-success my-3">{btnText}</button>
</div>
    );
}