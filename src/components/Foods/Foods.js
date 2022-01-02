import React, { useState } from 'react';
import Food from '../Food/Food';
import './Foods.css'


const Foods = () => {

    const [food, setFood] = useState([])
    const foods = [
        {
            id: 1,
            name: "Healthy Meal Plan",
            description: "How we dream our future",
            img: "https://ibb.co/B4tj6hf",
            price: "$9.5"
        },
        {
            id: 2,
            name: "Healthy Meal Plan",
            description: "How we dream our future",
            img: "https://ibb.co/9bNYXY9",
            price: "$4.5"
        },

        {
            id: 3,
            name: "Healthy Meal Plan",
            description: "How we dream our future",
            img: "https://ibb.co/272x7Rd",
            price: "$5.5"
        },
        {
            id: 4,
            name: "Healthy Meal Plan",
            description: "How we dream our future",
            img: "https://ibb.co/L89cFFw",
            price: "$7.5"
        },
        {
            id: 5,
            name: "Healthy Meal Plan",
            description: "How we dream our future",
            img: "https://ibb.co/PMZjW5D",
            price: "$6.5"
        },
        {
            id: 6,
            name: "Healthy Meal Plan",
            description: "How we dream our future",
            img: "https://ibb.co/qnkSnNv",
            price: "$2.5"
        },
        {
            id: 7,
            name: "Healthy Meal Plan",
            description: "How we dream our future",
            img: "https://ibb.co/gV2Z91p",
            price: "$13.5"
        },
        {
            id: 8,
            name: "Healthy Meal Plan",
            description: "How we dream our future",
            img: "https://ibb.co/PxKdnf7",
            price: "$9.5"
        },
        {
            id: 9,
            name: "Healthy Meal Plan",
            description: "How we dream our future",
            img: "https://ibb.co/TBRJ976",
            price: "$11.5"
        },
        {
            id: 10,
            name: "Healthy Meal Plan",
            description: "How we dream our future",
            img: "https://ibb.co/bzjg1MN",
            price: "$13.5"
        },

    ]

    return (
        <div>
            {/* {foods.map(food => <Food food={food}></Food> )} */}

            <Food khabar="helo"/>
        </div>
    );
};

export default Foods;