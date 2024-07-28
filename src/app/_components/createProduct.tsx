"use client";
import React, { useState } from 'react';
import styles from 'src/styles/products.module.css';

export function CreateProduct(): JSX.Element {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const response = await fetch('http://localhost:3000/api/product', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, description, price, quantity }),
        });

        const data = await response.json();
        console.log(data);
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
            />
            <input 
                type="text" 
                placeholder="Description" 
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
            />
            <input 
                type="number" 
                placeholder="Price" 
                value={price} 
                onChange={(e) => setPrice(parseFloat(e.target.value))} 
            />
            <input 
                type="number" 
                placeholder="Quantity" 
                value={quantity} 
                onChange={(e) => setQuantity(parseInt(e.target.value))} 
            />
            <button type="submit">Create Product</button>
        </form>
    );
}
