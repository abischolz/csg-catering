import React, { useState, useEffect } from 'react'
import {
  ItemCard,
  ActionContainer,
  ItemContent,
  AddToOrderButton,
} from './styles'
import Counter from '../Counter'
import DefaultModal from '../Modal'

const SandwichCard = (props) => {
  const { item, order, setOrder } = props
  //local state that will be sent to global state/local storage
  const [quantity, setQuantity] = useState(0)
  const [size, setSize] = useState('')
  const [orderItem, setOrderItem] = useState({})

  useEffect(() => {
    setOrderItem({
      ...orderItem,
      name: props.section.name,
    })
  }, [props.section.name])
  console.log('ORDER ITEM', orderItem)
  console.log('ORDER', props)
  console.log('QUANTITY', quantity)
  // const modalType = item.name === 'HEROES' ? <HeroModal /> : <PlatterModal />
  // modalType={modalType}
  const onClick = (e) => {
    e.preventDefault()

    const newOrderItem = Object.assign(orderItem, {
      size: size.length ? size : 'N/A',
      quantity: quantity,
      price: item.price,
      variety: [item.name],
    })
    console.log('order item? ', newOrderItem)

    setOrderItem(newOrderItem)
    const updatedOrder = props.order.slice().push(orderItem)
    props.addToOrder(updatedOrder)
    console.log('ORDER - in click', props.order)
  }
  return (
    <ItemCard sx={{ boxShadow: 1 }}>
      <ItemContent>
        <h4>{item.name}</h4>
        <p>{item.description}</p>
        {/* <p>{item.price}</p> */}
      </ItemContent>
      <ActionContainer>
        {item.name === 'HEROES' || item.name === 'PLATTER' ? (
          <DefaultModal {...props} />
        ) : (
          <Counter
            section={props.section.name}
            size={size}
            setSize={setSize}
            quantity={quantity}
            setQuantity={setQuantity}
          />
        )}

        <AddToOrderButton onClick={(e) => onClick(e)}>
          ADD TO ORDER
        </AddToOrderButton>
      </ActionContainer>
    </ItemCard>
  )
}

export default SandwichCard
