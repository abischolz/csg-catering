import React from 'react'
import {
  CounterBox,
  QtyButton,
  QuantityCount,
  OptionBox,
  SizeGroup,
	PriceBox,
} from './styles'

import { LengthButton } from '../Modal/HeroModal/styles'

const Counter = ({
	section,
	size,
	setSize,
	quantity,
	setQuantity,
	price,
	setPrice,
	item,
	...props
}) => {
  const onClickAdd = () => {
		const newCount = quantity + 1
		setQuantity(newCount)
  }

  const onClickReduce = () => {
		if (quantity > 0) {
			const newCount = quantity - 1
			setQuantity(newCount)
    }
  }

  const handleChange = (e) => {
    e.preventDefault()
		if (quantity && e.target.value !== size) {
			setQuantity(0)
    }
		setSize(e.target.value)
		setPrice(item.price[e.target.value])
  }
  return (
    <OptionBox>
			{section === 'Salads' && (
				<>
        <SizeGroup
						value={size}
          aria-labelledby='salad-size'
          exclusive
          onChange={handleChange}
          name='size'
        >
          <LengthButton value='Small' aria-label='small'>
            SMALL
          </LengthButton>
          <LengthButton value='Medium' aria-label='medium'>
            MEDIUM
          </LengthButton>
          <LengthButton value='Large' aria-label='large'>
            LARGE
          </LengthButton>
        </SizeGroup>
				</>
      )}
      <CounterBox>
        <QtyButton onClick={onClickReduce}>-</QtyButton>
        <QuantityCount>
					<p>{quantity}</p>
        </QuantityCount>

        <QtyButton onClick={onClickAdd}>+</QtyButton>
      </CounterBox>
			{!size && section !== 'Salads' && item.name !== 'HEROES' ? (
				<PriceBox>${item.price}</PriceBox>
			) : (
				<PriceBox>${price}</PriceBox>
			)}
    </OptionBox>
  )
}

export default Counter
