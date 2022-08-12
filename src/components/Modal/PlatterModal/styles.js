import styled, { css } from '@emotion/styled'
import {
  Box,
  Stack,
  Select,
  FormControl,
  Button,
  FormLabel,
  MenuItem,
  InputLabel,
} from '@mui/material'

export const PlatterBox = styled(Box)`
  font-family: 'Courier';
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-right: 50px;
`

export const FormBox = styled(FormControl)`
  justify-items: center;
  flex-direction: column;
  margin-bottom: 20px;
  display: flex;
  width: calc(100%-100px);
  img {
    min-height: 100px;
    width: 100%;
  }
`
export const SelectFormBox = styled(FormControl)`
  justify-items: center;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  width: calc(100%-100px);
  flex-wrap: wrap;
  justify-content: center;
  align-content: space-around;
  postion: absolute;
  img {
    min-height: 100px;
    width: 100%;
  }
`

export const PlatterImage = styled.img`
  opacity: ${(props) => (props.isSelected ? 1 : 0.75)};
  max-width: 155px;
`
export const SelectStack = styled(Stack)`
  display: flex;
  width: 100%;
  height: inherit;
  flex-wrap: wrap;
  flex-direction: row;
`

export const PlatterModalTitle = styled(FormLabel)`
  &.MuiFormLabel-root {
    font-family: 'Courier';
    line-height: 10px;
    margin: 20px 0px;
    text-align: center;
    letter-spacing: 1px;
    position: relative;
    max-height: 50px;
  }
`

export const PlatterStack = styled(Stack)`
  width: 100%;
  position: relative;
  margin: 10px;
  left: 20px;
`

export const DropdownContainer = styled(FormControl)`
  position: relative;
  margin: 10px 10px;
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
  margin: auto;
`
