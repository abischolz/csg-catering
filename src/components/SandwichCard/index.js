import React, { useState, useEffect } from 'react'
import {
  ItemCard,
  ActionContainer,
  ItemContent,
  AddToOrderButton,
} from './styles'
import Counter from '../Counter'
import DefaultModal from '../Modal'
import { Alert, Snackbar } from '@mui/material'

const SandwichCard = (props) => {
                                  const { item, order, setOrder } = props
                                  //local state that will be sent to global state/local storage
                                  const [quantity, setQuantity] = useState(0)
                                  const [size, setSize] = useState('')
                                  const [orderItem, setOrderItem] = useState({})
	const [price, setPrice] = useState('')
	//error handling
                                  const [open, setOpen] = useState(false)
	const [alert, setAlert] = useState('')

                                  useEffect(() => {
		if (typeof item.price === 'number') {
			setPrice(item.price)
		}
                                    setOrderItem({
                                      ...orderItem,
                                      name: props.section.name,
                                    })
                                  }, [props.section.name])

                                  const onClick = (e) => {
                                    e.preventDefault()
		
                                    if (quantity < 1) {
			setAlert(`Please add at least one ${item.name} first.`)
			setOpen((open) => !open)
			return
                                    }
		const newOrderItem = Object.assign(orderItem, {
                                        size: size.length ? size : 'N/A',
                                        quantity: quantity,
			price: price,
                                        variety: [item.name],
		})

                                    setOrderItem(newOrderItem)

                                    const updatedOrder = props.order.slice()

                                    updatedOrder.push(newOrderItem)

		props.addToOrder(updatedOrder);
                                  }

	const handleCloseAlert = (event, reason) => {
		if (reason === 'clickaway') {
			return
		}

		setOpen(false)
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
					<DefaultModal order={order} setOrder={setOrder} {...props} />
                                        ) : (
                                          <>
                                            <Counter
                                              section={props.section.name}
                                              size={size}
                                              setSize={setSize}
                                              quantity={quantity}
                                              setQuantity={setQuantity}
							price={price}
							setPrice={setPrice}
							item={item}
                                            />
						<AddToOrderButton onClick={(e) => onClick(e)}>
                                              ADD TO ORDER
                                            </AddToOrderButton>
                                          </>
                                        )}
				<Snackbar open={open} onClose={(e) => handleCloseAlert(e)}>
					<Alert onClose={(e) => handleCloseAlert(e)} severity='error'>
						{alert}
					</Alert>
				</Snackbar>
                                      </ActionContainer>
                                    </ItemCard>
                                  )
                                }

export default SandwichCard
