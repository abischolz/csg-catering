import styled, { css } from '@emotion/styled'
import {
  Box,
  AccordionDetails,
  TextField,
  TableContainer,
  Select,
  Table,
  FormLabel,
  Button
} from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';



export const FormBox = styled(Box)`
  .MuiBox-root {
    font-family: 'Courier';
    width: 100%;
    text-align: left;
  }
`

export const AccordionContent = styled(AccordionDetails)`
  .MuiAccordionDetails-root {
    display: flex;
    flex-direction: row;
  }
`
export const TextInput = styled(TextField)`
  width: 100%;
  label,
  input {
    font-family: 'Courier';
  }
`

export const TableBox = styled(TableContainer)`
  width: 100%;
`

export const OrderTable = styled(Table)`
  font-family: 'Courier';
  border: 1px dotted black;


  .MuiTableHead-root {
    font-weight: bold;
  }
  .MuiTableRow-root,
  .MuiTableCell-root {
    font-family: inherit;
  }
`

export const OrderFormGroup = styled(FormLabel)`
  .MuiTypography-root {
    font-family: 'Courier';
  }
`
export const OrderRequestButton = styled(Button)`
	font-family: inherit; 
	letter-spacing: 1px; 
	font-weight: 500; 
	border: 2px dotted black;
	color: black;
	width: fit-content;
	padding: 10px 10px;
	margin-top: 20px;

	:hover {
		background-color: #eeeeee;
	}
`
export const DateField = styled(TextInput)`
	font-family: inherit; 
	
	fieldset {
		border: 1px dotted black;
	}
`

export const AllergySelect = styled(Select)`
	font-family: inherit;
`