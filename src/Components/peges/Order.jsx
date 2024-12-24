import React from 'react';
import { TiDeleteOutline } from 'react-icons/ti';

const Order = ({ item, onDelete }) => {
  return (
    <div className='item'>
      <img src={`./img/${item.img}`} alt={item.title} />
      <h2>{item.title}</h2>
      <p>{item.desc}</p>
      <p className='mini'>Состав</p>
      <p className='mini'>{item.opis}</p>

      <b>Цена: {item.price}$</b>
      <TiDeleteOutline className='delete-icon' onClick={() => onDelete(item.id)} />
    </div>
  );
};

export default Order;