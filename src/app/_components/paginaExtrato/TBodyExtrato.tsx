import { revalidateTag } from 'next/cache'
import React, { useState, useEffect } from 'react';
import LinhaExtrato from './LinhaExtrato'
import { Product } from 'prisma';

export async function TBodyExtrato(){
    "use server"
    revalidateTag("")
    const response = await fetch("http://localhost:3000/api/products",{cache:'no-store'})
    const data: {message: string, products:{id:number,name:string,description:string,price:number,quantity:number,recentSoldAmount:number,totalSoldAmount:number}[]} = await response.json() as {message: string, products:{id:number,name:string,description:string,price:number,quantity:number,recentSoldAmount:number,totalSoldAmount:number}[]}

    const products = data.products
    
    const rows = [];
    for (let i = 0; i < products.length; i++) {
        const product = products[i]
        rows.push(<LinhaExtrato product = {product}/>);
    }
    return <tbody>{rows}</tbody>;
}