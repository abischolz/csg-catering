import React, { useState, useEffect } from 'react';
import { Alert, Snackbar } from '@mui/material';
import {
  HeroBox,
  HeroModalTitle,
  FormBox,
  RadioButtonGroup,
  LengthButton,
  HeroStack,
  DropdownContainer,
  Dropdown,
  Option,
  DropdownLabel,
  AddToOrderButton,
  HeroImage,
  ActionBox,
} from './styles';

import Counter from '../../Counter';
import hero1 from '../../../public/row-1-column-1.png';
import hero2 from '../../../public/row-1-column-2.png';
import hero3 from '../../../public/row-1-column-3.png';

const HeroSelect = (props) => {
  const [length, setLength] = useState(0);

  const [variety1, setVariety1] = useState('');
  const [variety2, setVariety2] = useState('');
  const [variety3, setVariety3] = useState('');

  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState('');
  const [orderItem, buildOrderItem] = useState({});

  //error handling
  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState('');

  useEffect(() => {
    const initOrderItem = { name: 'HERO' };
    buildOrderItem(initOrderItem);
  }, [props.item.name]);

  const handleSelect1 = (e) => {
    setVariety1(e.target.value);
  };

  const handleSelect2 = (e) => {
    setVariety2(e.target.value);
  };

  const handleSelect3 = (e) => {
    setVariety3(e.target.value);
  };

  const handleChange = (e) => {
    e.preventDefault();

    if (quantity && e.target.value !== length) {
      setQuantity(0);
    }

    setLength(e.target.value);
    setPrice(props.item.price[e.target.value]);
  };
  const onClick = (e) => {
    e.preventDefault();
    //alert
    if (!length) {
      setAlert('Please select hero length!');
      setOpen(true);
      return;
    }
    if (!variety1 && !variety2 && !variety3) {
      setAlert('Please tell us what you want and select at least one variety.');
      setOpen(true);
      return;
    }
    const size = length + ' FOOT';
    const newOrderItem = Object.assign(orderItem, {
      size: size,
      quantity: quantity,
      price: price,
      variety: [variety1, variety2, variety3],
    });

    buildOrderItem(newOrderItem);

    const updatedOrder = props.order.slice();

    updatedOrder.push(newOrderItem);
    props.addToOrder(updatedOrder);
    props.setOpen(false);
  };

  const handleCloseAlert = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <HeroBox>
      <FormBox>
        <HeroModalTitle>
          <h3>SANDWICH LENGTH</h3>
        </HeroModalTitle>
        <RadioButtonGroup
          defaultValue='3'
          value={length}
          aria-labelledby='hero-length-in-feet'
          name='hero-length'
          onChange={handleChange}
          exclusive
        >
          <LengthButton value='3' aria-label='3 FEET'>
            3 FEET
          </LengthButton>
          <LengthButton value='4' aria-label='4 FEET'>
            4 FEET
          </LengthButton>
          <LengthButton value='6' aria-label='6 FEET'>
            6 FEET
          </LengthButton>
        </RadioButtonGroup>
      </FormBox>

      <HeroStack direction='row'>
        <FormBox>
          <HeroImage
            src={hero1}
            alt='1/3 of a sandwich'
            isSelected={variety1}
          />
        </FormBox>
        <FormBox>
          <HeroImage
            src={hero2}
            alt='1/3 of a sandwich'
            isSelected={variety3}
          />
        </FormBox>
        <FormBox>
          <HeroImage
            src={hero3}
            alt='1/3 of a sandwich'
            isSelected={variety2}
          />
        </FormBox>
      </HeroStack>
      <DropdownContainer size='small'>
        <FormBox>
          <DropdownLabel>Sandwich #1</DropdownLabel>
          <Dropdown
            onChange={handleSelect1}
            value={variety1}
            label='Sandwich #1'
          >
            {props.sandwiches.map((sandwich, idx) => {
              return (
                <Option key={idx} value={sandwich.name}>
                  {sandwich.name}
                </Option>
              );
            })}
          </Dropdown>
        </FormBox>
        <FormBox>
          <DropdownLabel>Sandwich #2</DropdownLabel>
          <Dropdown
            onChange={handleSelect3}
            value={variety3}
            label='Sandwich #2'
          >
            {props.sandwiches.map((sandwich, idx) => {
              return (
                <Option key={idx} value={sandwich.name}>
                  {sandwich.name}
                </Option>
              );
            })}
          </Dropdown>
        </FormBox>
        <FormBox>
          <DropdownLabel>Sandwich #3</DropdownLabel>
          <Dropdown
            onChange={handleSelect2}
            value={variety2}
            label='Sandwich #3'
          >
            {props.sandwiches.map((sandwich, idx) => {
              return (
                <Option key={idx} value={sandwich.name}>
                  {sandwich.name}
                </Option>
              );
            })}
          </Dropdown>
        </FormBox>
        <ActionBox></ActionBox>
      </DropdownContainer>
      <HeroBox>
        <Counter
          section={props.section.name}
          quantity={quantity}
          setQuantity={setQuantity}
          price={price}
          item={props.item}
          size={length}
        >
          {quantity}
        </Counter>
        <AddToOrderButton onClick={(e) => onClick(e)}>
          +ADD+TO+ORDER+
        </AddToOrderButton>
      </HeroBox>

      <Snackbar open={open} onClose={(e) => handleCloseAlert(e)}>
        <Alert onClose={(e) => handleCloseAlert(e)} severity='error'>
          {alert}
        </Alert>
      </Snackbar>
    </HeroBox>
  );
};

export default HeroSelect;
