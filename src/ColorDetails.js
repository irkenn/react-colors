import React, { useState } from "react";
import ColorForm from "./ColorForm";
import Color from "./Color";
import { useLocation } from 'react-router-dom';

function ColorDetails({type}){

    //This component creates the state and manages the state for the upcoming components

    const [ colorArray, setColorArray ] = useState([]);

    const addColor = (newColorName, rgbColorCode ) => {
        console.log('colorArray', colorArray)
        setColorArray( colorArray => { 
            return [...colorArray, {newColorName, rgbColorCode}]
        });
    }
    console.log('type', type);
    

    const location = useLocation();
    

    if(type==='form'){
        console.log('form page ');
        return(
            <ColorForm addColor={addColor} />
        )
    }else if(type==='singleColor'){
   
    
        const rgbCode = location.state.rgbCode;
        return(
            <Color />
        )
    }

}

export default ColorDetails;