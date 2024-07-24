import { revalidateTag } from 'next/cache'
import React, { useState, useEffect } from 'react';
import { Product } from 'prisma';
import LinhaDashboard from './LinhaDashboard';

export async function TBodyDashboard(){
    "use server"
    revalidateTag("")
    const response = await fetch("http://localhost:3000/api/products",{cache:'no-store'})
    const data: {message: string, products:{id:number,name:string,description:string,price:number,quantity:number,recentSoldAmount:number,totalSoldAmount:number}[]} = await response.json() as {message: string, products:{id:number,name:string,description:string,price:number,quantity:number,recentSoldAmount:number,totalSoldAmount:number}[]}

    const products = data.products
    revalidateTag("")
    const sortedProducts = products.sort((a,b) =>b.totalSoldAmount-a.totalSoldAmount);
    

    const rows = [];
    for (let i = 0; i < sortedProducts.length; i++) {
        const product = sortedProducts[i]
        rows.push(<LinhaDashboard product = {product}/>);
    }
    return <tbody>{rows}</tbody>;
}