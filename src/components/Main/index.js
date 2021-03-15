import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addProduct } from '../../store/modules/cart/actions'

export default function Main() {
  const [product, setProduct] = useState('')
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()

  const handleAddProduct = (product) => {
    dispatch(addProduct(product))
    setProduct('')
  }

  return (
    <>
      <input onChange={(e) => setProduct(e.target.value)} value={product} type="text" placeholder="Digite aqui o nome do produto" />
      <button type="button" onClick={() => handleAddProduct(product)}>
        Adicionar Produto
      </button>
      <br/><br/>
      <h1>Produtos</h1>
      {cart.map(item => (
        <h5 key={item}>- {item}</h5>
      ))}
    </>
  )
}
