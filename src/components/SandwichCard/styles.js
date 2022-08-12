import styled, { css } from '@emotion/styled'
import { Card, CardContent, CardActions, Button } from '@mui/material'

export const ItemCard = styled(Card)`
  border: 1px solid black;
  flex-wrap: wrap;
  min-width: 200px;
  flex-basis: 0;
  margin-top: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 5px;
`

export const ActionContainer = styled(CardActions)`
  &.MuiCardActions-root {
    margin: auto;
    position: relative;
    width: 100%;
    padding: 10px 0px;
    display: flex;
    flex-direction: column;
  }
`
export const ItemContent = styled(CardContent)`
  text-align: center;
  padding: 5px;
  width: fit-content;
  margin: auto;
  p {
    padding: 5px;
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
