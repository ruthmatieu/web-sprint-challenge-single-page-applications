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
                
            </form>
        </div>
    )
}

export default Form;