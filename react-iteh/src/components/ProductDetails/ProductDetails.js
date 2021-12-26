import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../data';
import ProductList from '../ProductList/ProductList';
import './ProductDetails.css'

export default function Product(props) {
    const {id} = useParams();
    const {products} = data;

    const findProduct = (id) => {
        for(let i = 0; i < products.length; i++){
            if(products[i].id === +id){
                return products[i];
            }
        }
    }

    const product = findProduct(id);

    return (
        <div className='product-details' >
            <ProductList products={products}></ProductList>
            <div className='product-detail'>
                <h1>Details</h1>
                <div className='details-data'>
                    <h2>{product.name}</h2>
                    <h3>{product.model}</h3>
                    <p>${product.price}</p>
                </div>
                <img src={product.image}/>
            </div>
        </div>
    )
}