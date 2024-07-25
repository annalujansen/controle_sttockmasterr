import React from 'react'
import { Product } from '@prisma/client'

type Props = {
    product?: Product
  }
  
const LinhaExtrato: React.FC<Props> = ({ product }) => {
    if (!product) {
      return null
    }
    /*return (
      <div>
        <h2>{pessoa.id}</h2>
        <p>Email: {pessoa.cpf}</p>
      </div>
    )*/
    return(
      <tr>
        <th>{product.name}</th>
        <th>{product.price}</th>
        <th>{product.quantity}</th>
        <th>{product.recentSoldAmount}</th>
        <th>{product.totalSoldAmount}</th>
        <th>{product.price*product.totalSoldAmount}</th>
      </tr>
    )
  
  }
  
  export default LinhaExtrato