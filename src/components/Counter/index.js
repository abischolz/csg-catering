import React from 'react'
import {
  CounterBox,
  QtyButton,
  QuantityCount,
  OptionBox,
  SizeGroup,
} from './styles'

import { LengthButton } from '../Modal/HeroModal/styles'

const Counter = (props) => {
  const onClickAdd = () => {
    const newCount = props.quantity + 1
    props.setQuantity(newCount)
  }

  const onClickReduce = () => {
    if (props.quantity > 0) {
      const newCount = props.quantity + 1
      props.setQuantity(newCount)
    }
  }

  const handleChange = (e) => {
    e.preventDefault()
    if (props.quantity && e.target.value !== props.size) {
      props.setQuantity(0)
    }
    props.setSize(e.target.value)
  }
  return (
    <OptionBox>
      {props.section === 'Salads' && (
        <SizeGroup
          value={props.size}
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
      )}
      <CounterBox>
        <QtyButton onClick={onClickReduce}>-</QtyButton>
        <QuantityCount>
          <p>{props.quantity}</p>
        </QuantityCount>

        <QtyButton onClick={onClickAdd}>+</QtyButton>
      </CounterBox>
    </OptionBox>
  )
}

export default Counter
