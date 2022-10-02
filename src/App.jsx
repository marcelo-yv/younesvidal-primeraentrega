import React from 'react';
import './App.css'
import Navbar from './Components/Navbar.jsx';
import Encabezadoinicial from './Components/Encabezadoinicial.jsx';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.jsx';

const App = () => {
  return (
    <>
    <Encabezadoinicial leyenda='Envíos sin cargo Tucumán - Compras superiores a $5.000'/>
    <Navbar/>
    <ItemListContainer greeting='Productos más vendidos'/>
    </>
  );
}

export default App;
