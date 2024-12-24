import React from 'react';

const Item = ({ item, onShowItem, onAdd }) => {
  return (
    <div className='item'>
      <img 
        src={`./img/${item.img}`} alt={item.title} onClick={() => onShowItem(item)} />
      <h2>{item.title}</h2>
      <p>{item.desc}</p>
      <b>Цена: {item.price}$</b>
      <button className='add-to-cart' onClick={() => onAdd(item)} >
        Корзина
      </button>
      
    </div>
  );
}

export default Item;

