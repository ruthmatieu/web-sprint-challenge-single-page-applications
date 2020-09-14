import React, { useState } from 'react';
import axios from 'axios';
import * as yup from "yup";
import { Link } from 'react-router-dom';

//form validation
const formSchema = yup.object().shape({
    name: yup.string()
             .test('len', 'Name must be more than 2 characters long.', val => val.length > 2),
    size: yup.string().oneOf([]),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    canadian: yup.boolean(),
    italian: yup.boolean(),
    chicken: yup.boolean(),
    onions: yup.boolean(),
    pepper: yup.boolean(),
    special: yup.string()
})

const Form = () => {

    //state holds initial form value
    const [formInfo, setFormInfo] = useState({
        name: '',
        size: '',
        pepperoni: false,
        sausage: false,
        canadian: false,
        italian: false,
        chicken: false,
        onions: false,
        pepper: false,
        special: ''
    });

    const [errorState, setErrorState] = useState({
        name: '',
        size: '',
        pepperoni: false,
        sausage: false,
        canadian: false,
        italian: false,
        chicken: false,
        onions: false,
        pepper: false,
        special: ''
    });

    const validator = e => {
        yup
            .reach(formSchema, e.target.name)
            .validate(e.target.value)
            .then( valid => {
                setErrorState({
                    ...errorState,
                    [e.target.name]: ''
                });
            })
            .catch(err => {
                setErrorState({
                    ...errorState,
                    [e.target.name]: err.errors[0]
                });
            });
    }

    // when form is submitted, form will clear and send user data to separate page
    const formSubmit = e => {
        //prevents page refresh default
        e.preventDefault();
        console.log(`Thank you! We've received your order.`)
    };

    const changeHandler = e => {
        //not sure what this does but know it's important to add
        e.persist();
        validator(e);
        //if the input type is checkbox or radio, set the value = checked
        let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setFormInfo({...formInfo, [e.target.name]: value});
    };

    return (
        <div>

            <div>
                <h2>Build your own pizza</h2>
            </div>

            <form onSubmit={formSubmit}>
                {/* Name */}
                <div>
                    <h4 className="form-title">1. Name</h4>
                    <label htmlFor="name">
                        <input
                            id="name"
                            type="text"
                            name="name"
                            value={formInfo.name}
                            onChange={changeHandler}
                        />
                        {errorState.name.length > 0 ? (<p className="error">{errorState.name}</p>) : null}
                    </label><br/>
                </div>

                {/* Pizza size */}
                <div>
                    <h4 className="form-title">2. Choice of size</h4>
                    <label htmlFor="size">
                        <select
                            id="size"
                            name="size"
                            value={formInfo.size}
                            onChange={changeHandler}
                        >
                            <option value={null}></option>
                            <option value="16in">16 in</option>
                            <option value="12in">12 in</option>
                            <option value="10in">10 in</option>
                            <option value="8in">8 in</option>
                        </select>
                    </label><br/>
                </div>

                {/*
                <div>
                    <h4 className="form-title">3. Please select your sauce:</h4>

                    <label>
                        <input
                            type="radio"
                            id="original"
                            value="Original Red"
                            checked={formInfo.sauce === 'Original Red'}
                            onChange={changeHandler}
                        />
                    Original Red
                    </label><br/>

                    <label>
                        <input
                            type="radio"
                            id="garlic"
                            value="Garlic Ranch"
                            checked={formInfo.sauce === 'Garlic Ranch'}
                            onChange={changeHandler}
                        />
                    Garlic Ranch
                    </label><br/>
                    
                    <label>
                        <input
                            type="radio"
                            id="bbq"
                            value="BBQ Sauce"
                            checked={formInfo.sauce === 'BBQ Sauce'}
                            onChange={changeHandler}
                        />
                    BBQ Sauce
                    </label><br/>

                    <label>
                        <input
                            type="radio"
                            id="alfredo"
                            value="Spinach Alfredo"
                            checked={formInfo.sauce === 'Spinach Alfredo'}
                            onChange={changeHandler}
                        />    
                    Spinach Alfredo
                    </label><br/>
                </div>
                */}

                <div>
                    <h4 className="form-title">3. Choice of toppings:</h4>
    
                    <div className="toppings-div">
                        <div>
                            <label htmlFor="pepperoni">
                            <input
                                type="checkbox"
                                id="pepperoni"
                                name="pepperoni"
                                checked={formInfo.pepperoni}
                                onChange={changeHandler}
                            />
                            Pepperoni
                            </label>

                            <label htmlFor="sausage">
                                <input
                                    type="checkbox"
                                    id="sausage"
                                    name="sausage"
                                    checked={formInfo.sausage}
                                    onChange={changeHandler}
                                />
                                Sausage
                            </label>

                            <label htmlFor="canadian">
                                <input
                                    type="checkbox"
                                    id="canadian"
                                    name="canadian"
                                    checked={formInfo.canadian}
                                    onChange={changeHandler}
                                />
                                Canadian Bacon
                            </label>

                            <label htmlFor="italian">
                                <input
                                    type="checkbox"
                                    id="italian"
                                    name="italian"
                                    checked={formInfo.italian}
                                    onChange={changeHandler}
                                />
                                Spicy Italian Sausage
                            </label>

                            <label htmlFor="chicken">
                                <input
                                    type="checkbox"
                                    id="chicken"
                                    name="chicken"
                                    checked={formInfo.chicken}
                                    onChange={changeHandler}
                                />
                                Grilled Chicken
                            </label>

                            <label htmlFor="onions">
                                <input
                                    type="checkbox"
                                    id="onions"
                                    name="onions"
                                    checked={formInfo.onions}
                                    onChange={changeHandler}
                                />
                                Onions
                            </label>

                            <label htmlFor="pepper">
                                <input
                                    type="checkbox"
                                    id="pepper"
                                    name="pepper"
                                    checked={formInfo.pepper}
                                    onChange={changeHandler}
                                />
                                Green Pepper
                            </label>
                        </div>
                    </div>

                    <div>
                        <h4 className="form-title">Optional: Special Instructions</h4>
                        <label htmlFor="special">
                            <input
                                type="text"
                                id="special"
                                name="special"
                                placeholder="Anything else you'd like us to know?"
                                value={formInfo.special}
                                onChange={changeHandler}
                            />
                        </label>
                    </div>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form;