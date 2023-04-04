import './App.css';
import React ,{Component, useState} from 'react';
import styled from "styled-components"
import Header from './page/Header.jsx'
import Footer from './page/Footer.jsx'
import Cart from './page/Cart.jsx'
import Goods from './page/Goods.jsx'
import Menu from './page/Menu.jsx'
import Visual from './page/Visual.jsx'
import Detail from './page/Detail.jsx'
import { Routes, Route, Link, useParams } from 'react-router-dom';
import axios from 'axios';
function App() {
  let {id}=useParams()
  let [goods,setGoods]=useState([])
  let [cart,setCart]=useState([])

  const whatma =()=>{
    document.querySelector('')
  }
  //숫자단위 넣기
  const convertPrice =(price)=>{
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
  }
  return (
    <div className="App">
      <>
        <Header/>
        <Menu/>
        <Routes>
          <Route path="/" element={
            <>
            <Visual/>
            <Goods goods={goods} setGoods={setGoods} convertPrice={convertPrice}/>
            </>
          }/>
          <Route path="/detail/:id" element={
              <Detail  cart={cart} setCart={setCart} convertPrice={convertPrice}/>
          }/>
           <Route path="*" element={<>404</>}/>
        </Routes>
        <Footer/>
      </>
    </div>
  );
}
export default App;
