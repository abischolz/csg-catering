import React, { useState, useEffect } from 'react'
import { Alert, Snackbar } from '@mui/material'

import {
  PlatterBox,
  PlatterImage,
  PlatterStack,
  SelectStack,
  SelectContainer,
  PlatterModalTitle,
  FormBox,
  DropdownContainer,
  Dropdown,
  Option,
  DropdownLabel,
  AddToOrderButton,
  SelectFormBox,
} from './styles'
import Counter from '../../Counter'
import platter from '../../../public/platter section (1).png'

const PlatterSelect = (props) => {
	/*
  errors (when clicking add to cart)- 
  1) not selecting a variety - 'You must select at least one variety, we don't know you like that yet.'
  2) 

*/
  const [variety1, setVariety1] = useState('')
  const [variety2, setVariety2] = useState('')
  const [variety3, setVariety3] = useState('')
  const [variety4, setVariety4] = useState('')
  const [variety5, setVariety5] = useState('')

  const [quantity, setQuantity] = useState(0)

  const [orderItem, buildOrderItem] = useState({})

	//error handling
	const [open, setOpen] = useState(false)
	const [alert, setAlert] = useState('')
  useEffect(() => {
		const initOrderItem = {
			name: props.item.name,
		}
    buildOrderItem(initOrderItem)
		setQuantity(1)
  }, [props.item.name])

  const handleSelect1 = (e) => {
    setVariety1(e.target.value)
  }

  const handleSelect2 = (e) => {
    setVariety2(e.target.value)
  }

  const handleSelect3 = (e) => {
    setVariety3(e.target.value)
  }
  const handleSelect4 = (e) => {
    setVariety4(e.target.value)
  }

  const handleSelect5 = (e) => {
    setVariety5(e.target.value)
  }
  const onClick = (e) => {
    e.preventDefault()
		if (!variety1 && !variety2 && !variety3 && !variety4 && !variety5) {
			setAlert('Please tell us what you want and select at least one variety.')
			setOpen(true)
			return
		}
    const newOrderItem = Object.assign(orderItem, {
      size: props.item.size ? props.item.size : 'N/A',
			quantity: quantity,
      price: props.item.price,
      variety: [variety1, variety2, variety3, variety4, variety5],
    })

    buildOrderItem(newOrderItem)

    const updatedOrder = props.order.slice()

    updatedOrder.push(newOrderItem)
    props.addToOrder(updatedOrder)
		props.setOpen(false)
	}
	const handleCloseAlert = (event, reason) => {
		if (reason === 'clickaway') {
			return
		}

		setOpen(false)
  }

  // local state needs to 'build' a hero
  return (
    <PlatterBox>
      <PlatterModalTitle>PLATTER</PlatterModalTitle>

      <FormBox>
        <PlatterStack direction='row'>
          <FormBox>
            <PlatterImage
              src={platter}
              alt='3 sandwiches'
              isSelected={variety1}
            />
          </FormBox>
          <FormBox>
            <PlatterImage
              src={platter}
              alt='3 sandwiches'
              isSelected={variety2}
            />
          </FormBox>
          <FormBox>
            <PlatterImage
              src={platter}
              alt='3 sandwiches'
              isSelected={variety3}
            />
          </FormBox>
          <FormBox>
            <PlatterImage
              src={platter}
              alt='3 sandwiches'
              isSelected={variety4}
            />
          </FormBox>
          <FormBox>
            <PlatterImage
              src={platter}
              alt='3 sandwiches'
              isSelected={variety5}
            />
          </FormBox>
        </PlatterStack>
        <SelectStack>
          <SelectFormBox>
            <DropdownContainer>
              <DropdownLabel>Variety #1</DropdownLabel>
              <Dropdown
                label='Variety #1'
                value={variety1}
                onChange={handleSelect1}
								id={1}
              >
                {props.sandwiches.map((sandwich, idx) => {
                  return (
                    <Option key={idx} value={sandwich.name}>
                      {sandwich.name}
                    </Option>
                  )
                })}
              </Dropdown>
            </DropdownContainer>
            <DropdownContainer>
              <DropdownLabel>Variety #2</DropdownLabel>
              <Dropdown
                label='Variety #2'
                value={variety2}
                onChange={handleSelect2}
								id={2}
              >
                {props.sandwiches.map((sandwich, idx) => {
                  return (
                    <Option key={idx} value={sandwich.name}>
                      {sandwich.name}
                    </Option>
                  )
                })}
              </Dropdown>
            </DropdownContainer>
            <DropdownContainer>
              <DropdownLabel>Variety #3</DropdownLabel>
              <Dropdown
                label='Variety #3'
                value={variety3}
                onChange={handleSelect3}
								id='3'
              >
                {props.sandwiches.map((sandwich, idx) => {
                  return (
                    <Option key={idx} value={sandwich.name}>
                      {sandwich.name}
                    </Option>
                  )
                })}
              </Dropdown>
            </DropdownContainer>
            <DropdownContainer>
              <DropdownLabel>Variety #4</DropdownLabel>
              <Dropdown
                label='Variety #4'
                value={variety4}
                onChange={handleSelect4}
								id={4}
              >
                {props.sandwiches.map((sandwich, idx) => {
                  return (
                    <Option key={idx} value={sandwich.name}>
                      {sandwich.name}
                    </Option>
                  )
                })}
              </Dropdown>
            </DropdownContainer>
            <DropdownContainer>
              <DropdownLabel>Variety #5</DropdownLabel>
              <Dropdown
                label='Variety #5'
                value={variety5}
                onChange={handleSelect5}
								id={5}
              >
                {props.sandwiches.map((sandwich, idx) => {
                  return (
                    <Option key={idx} value={sandwich.name}>
                      {sandwich.name}
                    </Option>
                  )
                })}
              </Dropdown>
            </DropdownContainer>
          </SelectFormBox>
        </SelectStack>
				<AddToOrderButton onClick={(e) => onClick(e)}>
					+ADD+TO+ORDER+
				</AddToOrderButton>
				<Counter
					section={props.section.name}
					quantity={quantity}
					setQuantity={setQuantity}
					price={props.price}
					item={props.item}
				>
					{quantity}
				</Counter>
				<Snackbar open={open} onClose={(e) => handleCloseAlert(e)}>
					<Alert onClose={(e) => handleCloseAlert(e)} severity='error'>
						{alert}
					</Alert>
				</Snackbar>
      </FormBox>
    </PlatterBox>
  )
}

export default PlatterSelect
