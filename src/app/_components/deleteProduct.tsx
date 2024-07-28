"use client";
import React, { useState } from 'react';
import styles from 'src/styles/products.module.css';

export function DeleteProduct(): JSX.Element {
    const [id, setId] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const response = await fetch('http://localhost:3000/api/product', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id }),
        });

        const data = await response.json();
        console.log(data);
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="ID" 
                value={id} 
                onChange={(e) => setId(e.target.value)} 
            />
            <button type="submit">Delete Product</button>
        </form>
    );
}
