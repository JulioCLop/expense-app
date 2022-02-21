import React, { useState } from "react";

import ExpenseDate from './ExpenseDate';

import Card from '../UI/Card';

import "./ExpenseItem.css";




const ExpenseItem = (props) => {
  const  { date,title,amount } = props;
  const [ titles, setTitle] = useState(title);

  const clickHandler = ()=> {
    setTitle('updated')
  };

  return (
    <Card className='expense-item'>
    <ExpenseDate date={date} />
      <div className='expense-item__description'>
        <h2>{titles}</h2>
        <div className='expense-item__price'>${amount}</div>
      </div>
      <button onClick={clickHandler}>button</button>
    </Card>
  );
}

export default ExpenseItem;
