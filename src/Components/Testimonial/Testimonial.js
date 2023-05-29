import React, { useState } from 'react';
import './Testimonial.css';
import Weight from '../../Assets/weightback.gif';


function Testimonial() {
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [bmi, setBmi] = useState('');
    const [message, setMessage] = useState('');

    let image_source = '';

    const calculateBmi = () => {
        if (weight === 0 || height === 0) {
            alert('Please enter a valid weight and height.');
        } else {
            const heightInMeters = height / 100;
            const bmiValue = weight / (heightInMeters * heightInMeters);
            setBmi(bmiValue.toFixed(2));

            if (bmiValue < 18.5) {
                setMessage('You are underweight.');
            } else if (bmiValue >= 18.5 && bmiValue < 25) {
                setMessage('Don\'t worry! You are normal weight.');
            } else if (bmiValue > 25) {
                setMessage('Oops! You are overweight.');
            } else {
                setMessage(' enter  weight and height')
            }
        }
    };

    const resetValues = () => {
        setWeight('');
        setHeight('');
        setBmi('');
    };

    if (bmi < 1) {
        image_source = require('../../Assets/bmi.png');

    } else {
        if (bmi < 18) {
            image_source = require('../../Assets/lean.png');
        } else if (bmi >= 18 && bmi < 25) {
            image_source = require('../../Assets/crctbdy.png');
        } else {
            image_source = require('../../Assets/ovweight.png');
        }
    }

    return (
        <>
            <img className="back" src={Weight} alt="" />

            <div className="schedule">
                <div className="calculator">
                    <h1>BMI Calculator</h1>

                    <div>
                        <label className="labels">Weight (kg):</label>
                        <input
                            type="number"
                            placeholder="Enter your weight"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="labels">Height (cm):</label>
                        <input
                            type="number"
                            placeholder="Enter your height"
                            value={height}
                            onChange={(e) => setHeight(e.target.value)}
                        />
                    </div>

                    <button className="btn" onClick={calculateBmi}>
                        Check
                    </button>
                    <button className="btn" onClick={resetValues}>
                        Reset
                    </button>
                    <h1>{bmi}</h1>
                    <div>
                        {bmi && <h1>Your BMI is: {bmi}</h1>}
                        <p><h1 >{message}</h1></p>
                    </div>

                    <div className="img_container">
                        <img src={image_source} alt="" />
                    </div>

                </div>
            </div>
        </>
    );
}

export default Testimonial
