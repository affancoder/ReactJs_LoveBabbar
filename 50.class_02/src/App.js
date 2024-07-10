import React from 'react';
import './App.css';
import Products from './components/Products';

const App = () => {
  const products = [
    {
      id:'p1',
      title:'Nirma',
      amount: 450,
      date: new Date(2024, 4, 6),
    },
    {
      id:'p2',
      title:'Surf Excel',
      amount: 650,
      date: new Date(2024, 2, 6),
    },
    {
      id:'p3',
      title:'Tide',
      amount: 250,
      date: new Date(2024, 2, 6),
    },
    {
      id:'p4',
      title:'Ariel',
      amount: 550,
      date: new Date(2024, 2, 6),
    },
  ];

  return (
    <div>
    <p>affan asghar</p>
    <Products items = {products} />
    </div>
  );
}

export default App;