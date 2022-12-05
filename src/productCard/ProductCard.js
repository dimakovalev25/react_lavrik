import React from "react";
import style from './ProductCard.module.css'
import './ProductCard.css'

import useWindowSize from "../hooks/UseWindowSize";

export default function ProductCard () {
    let { width } = useWindowSize();
    console.log(width)

    let paddingSize = Math.min(parseInt(width / 200), 5);
    let classNames = `card p-${paddingSize}`
    console.log(classNames)


    return (
        <div className={classNames}>
        <h2>Product Card!</h2>
        <input type='text' className={'inp'}/>
        </div>
    )
}

