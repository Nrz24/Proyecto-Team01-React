import { useState } from "react";
import style from "./styles.module.css";

const ShopCartModal = (props) => {
  const { cartItems, onOpenModal, isOpenModal } = props;
  let cantidadItems = cartItems.reduce(
    (previousValue, item) => previousValue + item.qty,
    0
  );
  let total = cartItems.reduce(
    (previousValue, item) => previousValue + Number(item.precioDcto),
    0
  );

  return (
    <>
      <div className={style.contenedor_shopcart}>
        <div className={style.shopCartHeader}>
          <div className={style.shopCartHeaderCant}>
            Cantidad de articulos: {cantidadItems}
          </div>

          <button onClick={() => onOpenModal(isOpenModal)}> X</button>
        </div>
        <div className={style.shopCartMain}>
          <table className={style.shopCartTable}>
            <thead>
              <tr>
                <th scope="col">Producto</th>
                <th scope="col">Cant</th>
                <th scope="col">Precio</th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((linea) => {
                return (
                  <tr>
                    <td key={linea.id}>{linea.texto}</td>

                    <td>{linea.qty}</td>
                    <td>{linea.precioDcto}</td>
                    <td>{linea.qty * linea.precioDcto}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className={style.shopCartTotal}>
          <div> Total:</div>
          <div>{total}</div>
        </div>
        <div>
          <button className={style.shopCartBuy}>Comprar</button>
        </div>
      </div>
    </>
  );
};

export default ShopCartModal;
