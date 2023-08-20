import React, {useState} from "react";
import {useHistory} from 'react-router-dom';


function ColorForm({addColor}){
    //Set the initial stage of the form

    //This handles the form
    const initialState = {colorName: "", RGBcode: ""};
    const [ formData, setFormData ] = useState(initialState);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(data => ({
            ...data,
            [name]:value
            })
        )
    }

    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData(initialState)
        addColor(formData.colorName, formData.RGBcode);
        history.push({
            pathname: `/color/${formData.colorName}`,
            state: { rgbCode: formData.RGBcode }
        });
    }



    


    return (
        <div className="form-div">
            <form onSubmit={handleSubmit}>
                <label htmlFor="1">Name</label>
                <input  type="text"
                        placeholder="write your color name here"
                        onChange={handleChange}
                        name="colorName"
                        value={formData.colorName}
                        id="1"/>
                <label htmlFor="2">RGB code</label>
                <input  type="text"
                        placeholder="write the value for RGB, separated by a comma from 0-255"
                        onChange={handleChange}
                        name="RGBcode"
                        value={formData.RGBcode}
                        id="2"/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default ColorForm;