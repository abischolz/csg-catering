import React, { useState } from 'react'
import {
  CounterBox,
  QtyButton,
  QuantityCount,
  OptionBox,
  SizeGroup,
} from './styles'
import { RadioButtonGroup, LengthButton } from '../Modal/HeroModal/styles'
const Counter = (props) => {
  console.log('IN COUNTER', props.quantity)

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
          <LengthButton value='small' aria-label='small'>
            SMALL
          </LengthButton>
          <LengthButton value='medium' aria-label='medium'>
            MEDIUM
          </LengthButton>
          <LengthButton value='large' aria-label='large'>
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
