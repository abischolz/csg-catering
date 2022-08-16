import styled, { css } from '@emotion/styled'
import {
  List,
  Button,
  Box,
  ListItem,
  ListItemText,
  ListSubheader,
} from '@mui/material'

export const ModalButton = styled(Button)`
  min-height: 20px;
  color: gray;
  border: 1px black dotted;
  margin: auto;
`
export const ModalBox = styled(Box)`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1000px;
  height: min-content;
  background-color: white;
  border: 1px black dotted;
  font-family: 'Courier';
`

export const OptionsList = styled(List)`
  border: 1px black dotted;
  width: 40%;
  font-family: 'Courier';
`

export const SandwichListItem = styled(ListItem)`
         border-top: 1px black dotted;
         text-align: center;
         display: flex;
         flex-direction: column;
         padding: 0px;
         margin: 0px;
         line-height: 10px;
         text-transform: uppercase;
         max-height: calc((100% -50px) / 8);
         font-family: 'Courier';
       `

export const ListTitle = styled(ListSubheader)`
  padding: 0px;
  position: sticky;
  text-align: center;
  max-height: 50px;
  line-height: 10px;
  font-family: 'Courier';
  letter-spacing: 1px;
`
export const SandwichTextTitle = styled(ListItemText)`
         .css-10hburv-MuiTypography-root {
           font-weight: bold;
           padding: 0px;
           line-height: 10px;
         }
       `
export const SandwichTextDescription = styled(ListItemText)`
  .css-83ijpv-MuiTypography-root {
    font-family: 'Courier';
  }
`
