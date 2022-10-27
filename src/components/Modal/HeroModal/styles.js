import { ModalUnstyled } from '@mui/base'
import {
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  Box,
  Button,
  Select,
  Stack,
  MenuItem,
  ToggleButtonGroup,
  ToggleButton,
  InputLabel,
} from '@mui/material'
import styled, { css } from '@emotion/styled'

export const HeroBox = styled(Box)`
  font-family: 'Courier';
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  justify-content: start;
  margin-right: 20px;
  justify-content: space-around;
`

export const FormBox = styled(FormControl)`
  justify-items: center;
  margin-bottom: 20px;
  display: flex;
  width: 100%;
  img {
    min-height: 100px;
    width: 100%;
  }
`

export const HeroImage = styled.img`
  opacity: ${(props) => (props.isSelected ? 1 : 0.75)};
  transition: 0.2s;
`

export const HeroModalTitle = styled(FormLabel)`
  &.MuiFormLabel-root {
    font-family: 'Courier';
    line-height: 10px;
    margin-bottom: 20px;
    text-align: center;
    letter-spacing: 1px;
    position: sticky;
    max-height: 50px;
  }
`

export const RadioButtonGroup = styled(ToggleButtonGroup)`
  &.MuiToggleButtonGroup-root {
    font-family: 'Courier';
    width: 100%;
  }
`

export const LengthButton = styled(ToggleButton)`
  padding: 10px 30px;
  border: 1px dotted black;
  font-family: inherit;
  width: calc(100% / 3);
`
export const HeroStack = styled(Stack)`
  width: 100%;
  position: relative;
  right: 16px;
  /* margin-right: 35px; */
`

export const DropdownContainer = styled(FormControl)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  position: relative;
  right: 10px;
  /* margin-right: 20px; */
`

export const Dropdown = styled(Select)`
  &.MuiInputBase-root {
    width: 150px;
    height: 30px;
    font-weight: 100;
    font-family: 'Courier';
    font-size: 12px;
    border: 1px dotted black;
    &.Mui-focused .MuiOutlinedInput-notchedOutline {
      border: 2px solid #3d84c5;
    }
    .MuiSvgIcon-root {
      width: 15px;
      align-self: end;
    }
  }
`

export const Option = styled(MenuItem)`
  font-family: 'Courier';
  line-height: 5px;
  font-size: 14px;
  padding: 15px 10px;
  color: gray;
`
export const DropdownLabel = styled(InputLabel)`
  font-family: 'Courier';
  font-size: 14px;
  line-height: 0.45em;
  overflow: visible;

  .Mui-focused {
    color: #3d84c5;
  }
`
export const AddToOrderButton = styled(Button)`
  font-family: 'Courier';
  letter-spacing: 1px;
  font-weight: 300;
  border: 1px dotted black;
  color: black;
  width: 150px;
`
export const ActionBox = styled(Box)`
  display: flex; 

`