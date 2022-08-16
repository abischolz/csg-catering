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
