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
  Button,
  Grid,
  MenuItem,
  OutlinedInput,
  Chip, 
	Box,
} from '@mui/material';
import {Redirect} from 'react-router-dom'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import ExpandMore from '@mui/icons-material/ExpandMore'



import {
  AccordionContent,
  FormBox,
  TextInput,
  TableBox,
  OrderTable,
  HeaderRow,
  OrderFormGroup,
	OrderRequestButton,
	DateField,
	AllergySelect,
} from './styles';
import { MenuAccordion } from '../Meal/styles';

const Order = (props) => {
	const [open, setOpen] = useState(true);

	const startingInfo = localStorage.getItem('info')
		? JSON.parse(localStorage.getItem('info'))
		: {
				name: '',
				address: 'N/A',
				email: '',
				phone: '',
				date: null,
				time: '',
				delivery: false,
				allergies: [],
		  };
	//form information
	const [info, setInfo] = useState(startingInfo);

	useEffect(() => {
		localStorage.setItem('info', JSON.stringify(info));
	}, [info]);

	const allergyList = [
		'Milk',
		'Peanut',
		'Eggs',
		'Soy',
		'Wheat',
		'Sesame',
		'Shellfish',
		'Tree Nut',
		'Fish',
		'Other',
	];


	const handleFormChange = (e) => {
		setInfo((info) => ({
			...info,
			[e.target.name]: e.target.value,
		}));
	};

	const sendOrderRequest = async (order) => {
		try {
			let orderRequest = Object.assign({}, info);
			orderRequest.order = order;
			orderRequest = JSON.stringify(orderRequest);
			fetch(process.env.REACT_APP_ZAP_ENDPOINT, {
				method: 'POST',
				body: orderRequest,
			}).then((res) =>{ 
				alert('this is a placeholder - Request Sent!')
				console.log(res)});
		} catch (err) {
			console.log('SOMETHING WENT WRONG', err);
		}
	};

  return (
    <MenuAccordion
      id='catering-order-form'
      expanded={open}
      name='catering-order-accordion'
      defaultExpanded={true}
			onChange={(e) => setOpen((open) => !open)}
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
							{props.order && props.order.length ? (
                props.order.map((orderItem, idx) => {
                  return (
										<>
                    <TableRow key={idx}>
                      {orderItem.size === 'N/A' ? (
                        <TableCell>{orderItem.name}</TableCell>
                      ) : (
                        <TableCell>
														{orderItem.size} {orderItem.name}
                        </TableCell>
                      )}
												<TableCell>
													{orderItem.variety.length > 0
														? orderItem.variety.join(', ')
														: orderItem.variety}
												</TableCell>
                      <TableCell>{orderItem.quantity}</TableCell>
												<TableCell>
													${orderItem.price * orderItem.quantity}
												</TableCell>
                    </TableRow>
										</>
									);
                })
              ) : (
                <TableRow>
                  <TableCell>Nothing to see yet</TableCell>
                </TableRow>
              )}
							<TableRow>
								<TableCell />
								<TableCell />
								<TableCell>SUGGESTED GRATUITY</TableCell>
								<TableCell>
									$
									{props.order.reduce((orderTotal, orderItem) => {
										return (orderTotal += orderItem.price * orderItem.quantity);
									}, 0) * 0.22}
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell />
								<TableCell />
								<TableCell>TOTAL</TableCell>
								<TableCell>
									$
									{props.order.reduce((orderTotal, orderItem) => {
										return (orderTotal += orderItem.price * orderItem.quantity);
									}, 0) +
										props.order.reduce((orderTotal, orderItem) => {
											return (orderTotal +=
												orderItem.price * orderItem.quantity);
										}, 0) *
											0.22}
								</TableCell>
							</TableRow>
            </TableBody>
          </OrderTable>
        </TableBox>
        <FormBox noValidate autoComplete='off'>
					<Grid container spacing={1}>
						<Grid item xs={6}>
          <TextInput
            label='Name'
            variant='standard'
            name='name'
								value={info.name}
            id='name-field'
								onChange={(e) => handleFormChange(e)}
          />
						</Grid>

						<Grid item xs={6}>
          <TextInput
            name='email'
            label='Email'
            variant='standard'
								value={info.email}
								onChange={handleFormChange}
            id='email-field'
          />
						</Grid>

						<Grid item xs={6}>
          <TextInput
            name='phone'
            label='Phone'
            variant='standard'
								value={info.phone}
								onChange={handleFormChange}
            id='phone-number-field'
          />
						</Grid>

						<Grid item xs={5}>
							<LocalizationProvider dateAdapter={AdapterDayjs}>
								<DatePicker
									label='Requested Date'
									value={info.date}
									onChange={(date) => setInfo({ ...info, date: date })}
									renderInput={(params) => <DateField {...params} />}
          />
							</LocalizationProvider>
						</Grid>
						<Grid item xs={3}>
          <TextInput
            name='time'
            label='Time of Event'
            variant='standard'
								value={info.time}
								onChange={handleFormChange}
            id='event-time-field'
          />
						</Grid>
						<Grid item xs={4}>
          <OrderFormGroup>
            <FormControlLabel
									onChange={handleFormChange}
              control={<Checkbox />}
              label='Delivery?'
            />
          </OrderFormGroup>
						</Grid>
						{info.delivery && (
							<Grid item xs={4}>
            <TextInput
              id='delivery-address'
									onChange={handleFormChange}
									value={info.address}
              label='Delivery Address'
              name='address'
              variant='standard'
            />
							</Grid>
          )}
						<Grid item xs={7}>
							<AllergySelect
								name='allergies'
								id='allergy-select'
								multiple
								value={info.allergies}
								onChange={handleFormChange}
								input={<OutlinedInput id='allergy-select-chip' label='Chip' />}
								renderValue={(selected) => (
									<Box>
										{selected.map((value, idx) => (
											<Chip key={idx} label={value} />
										))}
									</Box>
								)}
							>
								{allergyList.map((allergy, idx) => (
									<MenuItem key={idx} value={allergy}>
										{allergy}
									</MenuItem>
								))}
							</AllergySelect>
						</Grid>
					</Grid>
        </FormBox>

				<OrderRequestButton onClick={() => sendOrderRequest(props.order)}>
					Submit your order request
				</OrderRequestButton>
      </AccordionContent>
    </MenuAccordion>
	);
};

export default Order;
