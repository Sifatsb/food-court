import React, { useState } from 'react';
import './Food.css'
// import '../../foodItem'
import fooditem from './../../foodItem'
import { BsCartPlusFill } from 'react-icons/bs';
import { BiPlusCircle } from 'react-icons/bi';
import { HiOutlineMinusCircle } from 'react-icons/hi';

const Food = () => {
    let [value, setValue] = useState(0)
    

    function negative(e) {
        e.preventDefault();

        if (value <= 0) {
            return;
        }
        setValue(--value);
    }

    function positive(e) {
        e.preventDefault();
        setValue(++value);
    }

    return (
        <div className='elementsFather'>
            {fooditem.map(items => {
                return (
                    <div className='elementsChild'>

                        <img src={items.img} alt="" />
                        <span>{items.name}</span>
                        <span>{items.price}</span>
                        <span>{items.description}</span>
                        <div className="cartDiv">
                            <button className='cartButton'><BsCartPlusFill size="20px" color="white" /> Add to cart</button>
                            <button className='sideButton' onClick={(e) => negative(e)}> <HiOutlineMinusCircle /> </button>
                            <input style={{ textAlign: 'center', fontSize: '18px' }} className='inputField' type="number" value={value} />
                            {/* <p>{count}</p> */}
                            <button className='sideButton' onClick={(e) => positive(e)}> <BiPlusCircle /> </button>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default Food;