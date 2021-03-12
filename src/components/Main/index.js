import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addProduct } from '../../store/modules/cart/actions'

import Button from '../Button'

export default function Main() {
  const [product, setProduct] = useState('')
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()

  return (
    <>
      <input onChange={(e) => setProduct(e.target.value)} value={product} type="text" placeholder="Digite aqui o nome do produto" />
      <Button onClick={() => dispatch(addProduct(product))} text="Adicionar produto" />  <br /> <br />
      <Button text="Remover produto" />
    </>
  )
}
