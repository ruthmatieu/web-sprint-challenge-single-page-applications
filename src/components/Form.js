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

                <div>
                    
                </div>
            </form>
        </div>
    )
}

export default Form;