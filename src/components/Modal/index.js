import React, { useState } from 'react'
import { Modal } from '@mui/material'
import {
  ModalButton,
  ModalBox,
  SandwichListItem,
  ListTitle,
  OptionsList,
  SandwichTextTitle,
  SandwichTextDescription,
} from './styles'
import { Counter } from '../Counter'
import { lunchSections } from '../../constants'
import HeroModal from './HeroModal'
import PlatterModal from './PlatterModal'

const DefaultModal = (props) => {
  //modal state

  const [open, setOpen] = useState(false)

  //dropdown state

  const [item, buildItem] = useState({})

  //modal and select controls
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <ModalButton onClick={handleOpen}>+</ModalButton>
      <Modal open={open} onClose={handleClose}>
        <ModalBox>
          <OptionsList
            subheader={
              <ListTitle component='div'>
                <h3>SANDWICH OPTIONS</h3>
              </ListTitle>
            }
          >
            {props.sandwiches.map((sandwich, idx) => {
              return (
                <SandwichListItem key={idx}>
                  <SandwichTextTitle primary={sandwich.name} />
                  <SandwichTextDescription secondary={sandwich.description} />
                </SandwichListItem>
              )
            })}
          </OptionsList>
          {props.item.name === 'HEROES' ? (
            <HeroModal
              order={props.order}
              setOrder={props.setOrder}
              {...props}
            />
          ) : (
            <PlatterModal
              order={props.order}
              setOrder={props.setOrder}
              {...props}
            />
          )}
        </ModalBox>
      </Modal>
    </>
  )
}

export default DefaultModal
