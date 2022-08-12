import styled, { css } from '@emotion/styled'
import { Box } from '@mui/material'

export const SectionBox = styled(Box)`
  display: flex;
  flex-direction: column;
  /* border-top: 1px solid grey; */
  margin: 10px 20px;
  border: 1px grey dotted;
`

export const ItemBox = styled(Box)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 20px;
  align-content: flex-start;
`
