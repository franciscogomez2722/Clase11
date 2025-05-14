import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductoList from './Components/ProductoList';
function App() {
  return (
    <div>
      <h1>Gestión de Productos</h1>
      <ProductoList />
    </div>
  );
}

export default App
