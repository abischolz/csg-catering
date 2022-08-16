import React, { useState, useEffect } from 'react'
import {
  ItemCard,
  ActionContainer,
  ItemContent,
  AddToOrderButton,
} from './styles'
import Counter from '../Counter'
import DefaultModal from '../Modal'
import { Alert } from '@mui/material'

const SandwichCard = (props) => {
                                  const { item, order, setOrder } = props
                                  //local state that will be sent to global state/local storage
                                  const [quantity, setQuantity] = useState(0)
                                  const [size, setSize] = useState('')
                                  const [orderItem, setOrderItem] = useState({})
                                  const [open, setOpen] = useState(false)

                                  useEffect(() => {
                                    setOrderItem({
                                      ...orderItem,
                                      name: props.section.name,
                                    })
                                  }, [props.section.name])

                                  const onClick = (e) => {
                                    e.preventDefault()
                                    console.log('size', size)
                                    console.log('quantity', quantity)
                                    console.log(item.name)
                                    if (quantity < 1) {
                                      return <Alert>is this right?</Alert>
                                    }
                                    const newOrderItem = Object.assign(
                                      orderItem,
                                      {
                                        size: size.length ? size : 'N/A',
                                        quantity: quantity,
                                        price: item.price,
                                        variety: [item.name],
                                      },
                                    )

                                    setOrderItem(newOrderItem)

                                    const updatedOrder = props.order.slice()

                                    updatedOrder.push(newOrderItem)
                                    props.addToOrder(updatedOrder)
                                  }
                                  return (
                                    <ItemCard sx={{ boxShadow: 1 }}>
                                      <ItemContent>
                                        <h4>{item.name}</h4>
                                        <p>{item.description}</p>
                                        {/* <p>{item.price}</p> */}
                                      </ItemContent>
                                      <ActionContainer>
                                        {item.name === 'HEROES' ||
                                        item.name === 'PLATTER' ? (
                                          <DefaultModal
                                            order={order}
                                            setOrder={setOrder}
                                            {...props}
                                          />
                                        ) : (
                                          <>
                                            <Counter
                                              section={props.section.name}
                                              size={size}
                                              setSize={setSize}
                                              quantity={quantity}
                                              setQuantity={setQuantity}
                                            />
                                            <AddToOrderButton
                                              onClick={(e) => onClick(e)}
                                            >
                                              ADD TO ORDER
                                            </AddToOrderButton>
                                          </>
                                        )}
                                      </ActionContainer>
                                    </ItemCard>
                                  )
                                }

export default SandwichCard
