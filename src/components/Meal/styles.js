import styled, { css } from '@emotion/styled'
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Stack,
  Grid,
} from '@mui/material'

export const MenuAccordion = styled(Accordion)`
  width: 100%;

  .css-sh22l5-MuiButtonBase-root-MuiAccordionSummary-root,
  .css-sh22l5-MuiButtonBase-root-MuiAccordionSummary-root.Mui-expanded {
    background-color: #eeeeee;
    border: 1px solid black;
    max-height: 70px;
    overflow: hidden;
    white-space: nowrap;
  }

  &.MuiCollapse-wrapperInner,
  .MuiCollapse-vertical,
  .css-9l5vo-MuiCollapse-wrapperInner {
    background-color: white;
    justify-content: center;
  }

  .css-11lq3yg-MuiGrid-root {
    justify-content: center;
  }
`
