import React from 'react';
import styles from 'src/styles/products.module.css';

export async function Products(): Promise<JSX.Element> {
    const response = await fetch("http://localhost:3000/api/product");

    const data = await response.json() as { message: string, products: { id: string, name: string, description: string, price: number, quantity: number }[] };

    return (
        <ul className={styles.productList}>
            {data.products.map((item) => (
                <li key={item.id} className={styles.productItem}>
                    <div><strong>ID:</strong> {item.id}</div>
                    <div><strong>Name:</strong> {item.name}</div>
                    <div><strong>Description:</strong> {item.description}</div>
                    <div><strong>Price:</strong> ${item.price.toFixed(2)}</div>
                    <div><strong>Quantity:</strong> {item.quantity}</div>
                </li>
            ))}
        </ul>
    );
}
