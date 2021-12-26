import React from 'react';
import './ProductDetailsForm.css';
import { useParams } from 'react-router-dom';
import data from '../../data';

export default function ProductDetailsForm(props) {
    const {id} = useParams();

    const checked = () => {
        const radios = document.getElementsByName('ram');
        for(let i = 0; i < radios.length; i++){
            if(radios[i].checked){
                return radios[i].value;
            }
        }
    }

    const validate = () => {
        const amount = document.getElementById('amount').value;
        const color = document.getElementById('colors').value;
        if(amount.match(/^[1-9]+$/) && checked()){
            const product = data.findProduct(id);

            data.cart.push({
                id: data.idCart++,
                name: product.name,
                model: product.model,
                ram: checked(),
                color: color,
                amount: amount,
                price: product.price,
                total: amount * product.price
            });
        }else{
            alert('Invalid input. Please try again.')
        }
    }

    return (
        <div className='product-details-form'>
            <form>
                <fieldset className='ram'>
                    <legend>Choose RAM</legend>
                    <input type="radio" id="ram-8" name="ram" value="8 GB"/>
                    <label htmlFor="ram-8">8 GB</label>
                    <br/>
                    <input type="radio" id="ram-12" name="ram" value="12 GB"/>
                    <label htmlFor="ram-12">12 GB</label>
                    <br/>
                    <input type="radio" id="ram-16" name="ram" value="16 GB"/>
                    <label htmlFor="ram-16">16 GB</label>
                </fieldset>

                <div className='amount'>
                    <label htmlFor='amount'>Amount</label>
                    <input type='text' name='amount' id='amount' autoComplete='off'></input>
                </div>

                <div className='color'>  
                    <label htmlFor="colors">Choose color</label>
                    <select name="colors" id="colors">
                        <option value="Black">Black</option>
                        <option value="White">White</option>
                        <option value="Gray">Gray</option>
                        <option value="Lightblue">Lightblue</option>
                    </select>
                </div>

                <button type="button" className='btn' onClick={validate}> Add to cart </button>

            </form>
        </div>
    )
}