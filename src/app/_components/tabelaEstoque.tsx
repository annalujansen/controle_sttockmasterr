"use client";
import { useEffect, useState, useRef } from 'react';
import useFormSell from '../hooks/useFormSell';
import styles from '~/styles/estoque.module.css';
import style from '~/styles/form.module.css';

type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

export default function TabelaEstoque() {
  const [products, setProducts] = useState<Product[]>([]);
  const formRef = useRef<HTMLDivElement | null>(null);
  const tableRef = useRef<HTMLTableElement | null>(null);

  const fetchProducts = async () => {
    const response = await fetch('/api/sell');
    const data = await response.json();
    setProducts(data);
  };

  const handleSellComplete = () => {
    fetchProducts(); 
  };

  const {
    isOpen,
    quantity,
    handleQuantityChange,
    openForm,
    closeForm,
    handleSubmit,
  } = useFormSell(handleSellComplete);

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (isOpen && formRef.current) {
      window.scrollTo({
        top: formRef.current.offsetTop,
        behavior: 'smooth',
      });
    }
  }, [isOpen]);

  const handleOpenForm = (productId: number) => {
    openForm(productId);
  };

  const handleCloseForm = () => {
    closeForm();
    if (tableRef.current) {
      window.scrollTo({
        top: tableRef.current.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Visualização de Estoque</h1>
      <table className={styles.table} ref={tableRef}>
        <thead className={styles.thead}>
          <tr>
            <th>Produto</th>
            <th>Preço</th>
            <th>Quantidade em Estoque</th>
            <th>Operação</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className={styles.body}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>
                <button
                  onClick={() => handleOpenForm(product.id)}
                  className={styles.button}
                >
                  Vender
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isOpen && (
        <div className="form-modal" ref={formRef}>
          <div className={style.main}>
            <form className={style.container} onSubmit={handleSubmit}>
              <h2 className={style.title}>Produtos</h2>
              <input
                type="number"
                onChange={handleQuantityChange}
                placeholder="Quantidade"
                className={style.input}
              />
              <button
                type="submit"
                className={style.sale}
              >
                Confirmar Venda
              </button>
              <button
                type="button"
                onClick={handleCloseForm}
                className={style.cancel}
              >
                Cancelar
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
