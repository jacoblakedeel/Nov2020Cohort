import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

function News() {
    let[responseData, setResponseData] = useState(' ');
    

    useEffect(async ()=>{
        let url = "https://api.nomics.com/v1/currencies/ticker?key=04d4c28e8d2730d49fe6e0f015800b4e&ids=BTC,ETH,XRP&interval=1d,30d&per-page=100&page=1"

        let response = await fetch(url);

        let data = await response.json();

        setResponseData(data);

        console.log(data);
        


    }, []) 

    return (
        <>
            
        </>
    )
}

export default News
