import React, { useEffect, useState } from 'react';
import './Main.css';


const Main = () => {
    const arr = ['Life is Food.', 'Eating is not merely a material pleasure.', 'Food is our common ground.', 'I like food.', 'Food is Love.'];
    const [quote, setQuote] = useState('Life is uncertain, Eat dessert first')
    let count = 0;


    useEffect(() => {
        setInterval(() => {
            setQuote(arr[count]);
            count++;

            if (count === 4) {
                count = 0;
            }
        }, 3500)
    }, [])

    return (
        <div className="main-container">
            <div className="elements">
                <span className="food">{quote}</span>
                <button className="button">Get Started</button>
                {/* <button class="glow-on-hover" type="button">Get Started!</button> */}

            </div>
        </div>
    );
};

export default Main;