import React from 'react'

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material'
import ExpandMore from '@mui/icons-material/ExpandMore'

import SectionMenu from '../SectionMenu'
import { MenuAccordion, MenuDetailsSeciton } from './styles'

const MealMenu = (props) => {
  const LunchBanner = () => {
    return (
      <strong>
        {`
      __    _____ _____ _____ _____ 
     |  |  |  |  |   | |     |  |  |
     |  |__|  |  |     |   --|     |
     |_____|_____|_|___|_____|__|__|
                                    
     `}
      </strong>
    )
  }
  const BreakfastBanner = () => {
    return (
      <strong>
        {`                                                   
       _____ _____ _____ _____ _____ _____ _____ _____ _____ 
      | __  | __  |   __|  _  |  |  |   __|  _  |   __|_   _|
      | __ -|    -|   __|     |    -|   __|     |__   | | |  
      |_____|__|__|_____|__|__|__|__|__|  |__|__|_____| |_|  
                                                                                                                 
      `}
      </strong>
    )
  }
  return (
    <div>
      <MenuAccordion defaultExpanded={true} square>
        <AccordionSummary
          id={props.id}
          expandIcon={<ExpandMore />}
          aria-controls={`${props.id} Accordion`}
        >
          <pre id='taag_output_text'>
            {props.id === 'Breakfast' ? BreakfastBanner() : LunchBanner()}
          </pre>
        </AccordionSummary>

        <AccordionDetails>
          {props.sections.map((section, idx) => {
            return <SectionMenu key={idx} section={section} {...props} />
          })}
        </AccordionDetails>
      </MenuAccordion>
    </div>
  )
}

export default MealMenu
