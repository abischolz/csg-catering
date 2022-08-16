import React, { useState, useEffect } from 'react'

import {
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  TextField,
  Checkbox,
  FormControlLabel,
  FormGroup,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material'
import ExpandMore from '@mui/icons-material/ExpandMore'

import {
  AccordionContent,
  FormBox,
  TextInput,
  TableBox,
  OrderTable,
  HeaderRow,
  OrderFormGroup,
} from './styles'
import { MenuAccordion } from '../Meal/styles'

const Order = (props) => {
  const [open, setOpen] = useState(true)

  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [time, setTime] = useState('')
  const [date, setDate] = useState(new Date())
  const [delivery, setDelivery] = useState(false)

  useEffect(() => {}, [props.order.length])
  /*
    initial state 

    should initialize a table with columns: 
      size + item name/ variety / qty / price (total)
      "3 ft Hero "  / 
      'Small Salad'

      should include total and calculate gratuity 

    */
  console.log(props)
  return (
    <MenuAccordion
      id='catering-order-form'
      expanded={open}
      name='catering-order-accordion'
      defaultExpanded={true}
      onChange={(e) => setOpen(e.target.value)}
    >
      <AccordionSummary
        id={props.id}
        expandIcon={<ExpandMore />}
        aria-controls={`${props.id} Accordion`}
      >
        CATERING REQUEST
      </AccordionSummary>
      {/* box is the form portion */}
      <AccordionContent>
        <TableBox>
          <OrderTable>
            <TableHead>
              <TableRow>
                <TableCell>Item</TableCell>
                <TableCell>Variety</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.order.length ? (
                props.order.map((orderItem, idx) => {
                  return (
                    <TableRow key={idx}>
                      {orderItem.size === 'N/A' ? (
                        <TableCell>{orderItem.name}</TableCell>
                      ) : (
                        <TableCell>
                          {orderItem.size} {orderItem.name}{' '}
                        </TableCell>
                      )}
                      <TableCell>{orderItem.variety}</TableCell>
                      <TableCell>{orderItem.quantity}</TableCell>
                    </TableRow>
                  )
                })
              ) : (
                <TableRow>
                  <TableCell>Nothing to see yet</TableCell>
                </TableRow>
              )}
            </TableBody>
          </OrderTable>
        </TableBox>
        <FormBox noValidate autoComplete='off'>
          <TextInput
            label='Name'
            variant='standard'
            name='name'
            value={name}
            id='name-field'
            onChange={(e) => setName(e.target.value)}
          />

          <br />
          <TextInput
            name='email'
            label='Email'
            variant='standard'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id='email-field'
          />
          <br />
          <TextInput
            name='phone'
            label='Phone'
            variant='standard'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            id='phone-number-field'
          />

          <br />
          <TextInput
            name='date'
            label='Date of Event'
            variant='standard'
            value={date}
            onChange={(e) => setDate(e.target.value)}
            id='event-date-field'
          />
          <br />
          <TextInput
            name='time'
            label='Time of Event'
            variant='standard'
            value={time}
            onChange={(e) => setTime(e.target.value)}
            id='event-time-field'
          />
          <br />
          <OrderFormGroup>
            <FormControlLabel
              onChange={(e) => setDelivery((delivery) => !delivery)}
              control={<Checkbox />}
              label='Delivery?'
            />
          </OrderFormGroup>
          {delivery && (
            <TextInput
              id='delivery-address'
              onChange={(e) => setAddress(e.target.value)}
              value={address}
              label='Delivery Address'
              name='address'
              variant='standard'
            />
          )}
          {/* 
          inputs: Name, Email, Phone (Contact info)
          inputs: Date of event, Time of event, Delivery/Pickup (If delivery - address)


        */}
        </FormBox>
      </AccordionContent>
    </MenuAccordion>
  )
}

export default Order
