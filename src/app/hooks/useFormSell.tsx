import { useState } from 'react';

export default function useFormSell(onSellComplete: () => void) {
  const [isOpen, setIsOpen] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [productId, setProductId] = useState<number | null>(null);

  const openForm = (id: number) => {
    setProductId(id);
    setIsOpen(true);
  };

  const closeForm = () => {
    setIsOpen(false);
    setQuantity(0);
    setProductId(null);
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(e.target.value));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (quantity > 0 && productId !== null) {
      console.log('quantidade_vendida: ', quantity);
      try {
        const response = await fetch('/api/sell', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: productId, quantitySold: quantity }),
        });
  
        const data = await response.json();
        console.log('API response:', data);
  
        if (response.ok) {
          onSellComplete();
        } else {
          console.error('Error selling product:', data.error);
        }
      } catch (error) {
        console.error('Error in handleSubmit:', error);
      }
    }
    closeForm();
  };

  return {
    isOpen,
    quantity,
    handleQuantityChange,
    openForm,
    closeForm,
    handleSubmit,
  };
}
