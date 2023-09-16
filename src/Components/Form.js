import React, { useState } from 'react';
// import PropTypes from 'prop-types'

export default function Form(props) {

    const handleUpClick = () => {
        let numOfWords = text.split(" ").length;
        setWords(numOfWords);

        let numOfDigit = text.replace(/\D/g, '').length;
        setDigits(numOfDigit);

        let numOfUpperCase = (text.match(/[A-Z]/g) || []).length;
        setUpCase(numOfUpperCase);

        let numOfLowerCase = (text.match(/[a-z]/g) || []).length;
        setLowCase(numOfLowerCase);

        let numOfSpaces = text.split(" ").length - 1;
        setSpaces(numOfSpaces);
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleResetClick = () => {
        setText("");
        setWords(0);
        setDigits(0);
        setUpCase(0);
        setLowCase(0);
        setSpaces(0);

    }

    const [text, setText] = useState("");
    const [words, setWords] = useState(0);
    const [digits, setDigits] = useState(0);
    const [upCases, setUpCase] = useState(0);
    const [lowCases, setLowCase] = useState(0);
    const [spaces, setSpaces] = useState(0);
    return (
        <>
            <div className="container pt-3">
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label"><h1>{props.heading}</h1></label>
                    <textarea className={`form-control shadow bg-${props.mode} p-2 text-${props.mode==="light"?"dark":"light"}`} value={text} onChange={handleOnChange} id="myBox" rows="10" placeholder='Enter you text here!'></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Analyze</button>
                <button className="btn btn-danger mx-3" onClick={handleResetClick}>Clear</button>
            </div>

            <div className="container my-3">
                <div className='mb-3 text-danger'>
                    *<em>Symbols will be included in both upper and lower case letters.</em>    
                </div>
                <label htmlFor="numOfWords" className='mb-4 mx-2'>Total Number of Words : </label>
                <input type="text" className="bg-white" value={words} disabled/><br />

                <label htmlFor="numOfDigit" className='mb-4 mx-2'>Total Number of Digits : </label>
                <input type="text" className="bg-white" value={digits} disabled/><br />

                <label htmlFor="numOfUpperCase" className='mb-4 mx-2'>Total Number of Uppercase Letters : </label>
                <input type="text" className="bg-white" value={upCases} disabled/><br />

                <label htmlFor="numOfLowerCase" className='mb-4 mx-2'>Total Number of Lowercase Letters : </label>
                <input type="text" className="bg-white" value={lowCases} disabled/><br />

                <label htmlFor="numOfSpaces" className='mb-4 mx-2'>Total Number of Spaces : </label>
                <input type="text" className="bg-white" value={spaces} disabled/>
            </div >
        </>
    );
}