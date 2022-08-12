import styled, { css } from '@emotion/styled'
import {
  Box,
  AccordionDetails,
  TextField,
  TableContainer,
  TableHead,
  Table,
  FormLabel,
} from '@mui/material'

export const FormBox = styled(Box)`
  font-family: 'Courier';
  width: 50%;
  text-align: left;
`

export const AccordionContent = styled(AccordionDetails)`
  display: flex;
`
export const TextInput = styled(TextField)`
  width: 75%;
  label {
    font-family: 'Courier';
  }
`

export const TableBox = styled(TableContainer)`
  width: 50%;
`

export const OrderTable = styled(Table)`
  font-family: 'Courier';

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
