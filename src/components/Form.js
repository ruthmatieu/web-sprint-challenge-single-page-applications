import React from 'react';
import axios from 'axios';
import * as yup from "yup";
import { Link } from 'react-router-dom';

const Form = () => {
    return (
        <div>

            <div>
                <h2>Build your own pizza</h2>
            </div>

            <form>
                {/* Name */}
                <div>
                    <h5 className="form-title">1. Name</h5>
                    <label htmlFor="name">
                        <input
                            id="name"
                            type="text"
                            name="name"
                            value=""
                            onChange=""
                        />
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