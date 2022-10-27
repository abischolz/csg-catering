import { Box, Button, ToggleButtonGroup, Alert } from '@mui/material'
import styled, { css } from '@emotion/styled'

export const OptionBox = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 90%;
  position: relative;
  margin: auto;
  width: 90%;
`
export const CounterBox = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: auto;
  align-items: center;
  position: inherit;
  bottom: 10px;
  max-width: 100px;
  align-self: center;
  padding: 10px 0px;
`
export const QtyButton = styled(Button)`
  border: 1px black solid;
  height: 20px;
  min-width: 20px;
  flex-grow: 1;
  color: black;
`
export const QuantityCount = styled.div`
  min-width: 20px;
  margin: 0px 10px;
  flex-grow: 2;
	text-align: center;
`

export const SizeGroup = styled(ToggleButtonGroup)`
  width: inherit;
  font-family: 'Courier';
  button {
    font-size: 0.8rem;
  }
`

export const PriceBox = styled(Box)`
	font-family: inherit;
	position: relative;
	margin: 0px auto 10px auto;
	text-align: center;
`
export const NoSizeAlert = styled(Alert)``
