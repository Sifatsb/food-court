import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Main.css';
import { motion } from 'framer-motion';
import { red } from '@mui/material/colors';
// import {motion} from 'framer-motion/dist/es/index'


const Main = () => {
    const arr = ['Life is Food.', 'Eating is not merely a material pleasure.', 'Food is our common ground.', 'I like food.', 'Food is Love.'];
    const [quote, setQuote] = useState('Life is uncertain, Eat dessert first')
    const colors = ['blue', 'green', 'black', 'purple', 'pink', 'magenta']
    const [colorx, setColor] = useState('magenta')
    let count = 0;


    useEffect(() => {
        setInterval(() => {
            setQuote(arr[count]);
            setColor(colors[count])
            count++;

            if (count === 4) {
                count = 0;
            }
        }, 3500)
    }, [])

    return (
        <motion.div initial={{opacity:0}} animate={{ opacity:1 }} transition={{ duration: 1.5 }} className="main-container">
            <div className="elements">
                <motion.span initial={{ color:'magenta' }} animate={{ color:colorx }} className="food">{quote}</motion.span>
                <Link to='/signup'><button className="button">Get Started</button></Link>
                
                {/* <button class="glow-on-hover" type="button">Get Started!</button> */}

            </div>
        </motion.div>
    );
};

export default Main;