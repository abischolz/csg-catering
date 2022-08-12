import React, { useState } from 'react'
import { FormControl, FormLabel, Modal, Box, Stack } from '@mui/material'
import {
  PlatterBox,
  PlatterImage,
  PlatterStack,
  SelectStack,
  SelectContainer,
  PlatterModalTitle,
  FormBox,
  DropdownContainer,
  Dropdown,
  Option,
  DropdownLabel,
  AddToOrderButton,
  SelectFormBox,
} from './styles'

import platter from '../../../public/platter section (1).png'

const PlatterSelect = (props) => {
  const [variety1, setVariety1] = useState('')
  const [variety2, setVariety2] = useState('')
  const [variety3, setVariety3] = useState('')
  const [variety4, setVariety4] = useState('')
  const [variety5, setVariety5] = useState('')

  const handleSelect1 = (e) => {
    setVariety1(e.target.value)
  }

  const handleSelect2 = (e) => {
    setVariety2(e.target.value)
  }

  const handleSelect3 = (e) => {
    setVariety3(e.target.value)
  }
  const handleSelect4 = (e) => {
    setVariety4(e.target.value)
  }

  const handleSelect5 = (e) => {
    setVariety5(e.target.value)
  }

  // local state needs to 'build' a hero
  return (
    <PlatterBox>
      <PlatterModalTitle>PLATTER</PlatterModalTitle>

      <FormBox>
        <PlatterStack direction='row'>
          <FormBox>
            <PlatterImage
              src={platter}
              alt='3 sandwiches'
              isSelected={variety1}
            />
          </FormBox>
          <FormBox>
            <PlatterImage
              src={platter}
              alt='3 sandwiches'
              isSelected={variety2}
            />
          </FormBox>
          <FormBox>
            <PlatterImage
              src={platter}
              alt='3 sandwiches'
              isSelected={variety3}
            />
          </FormBox>
          <FormBox>
            <PlatterImage
              src={platter}
              alt='3 sandwiches'
              isSelected={variety4}
            />
          </FormBox>
          <FormBox>
            <PlatterImage
              src={platter}
              alt='3 sandwiches'
              isSelected={variety5}
            />
          </FormBox>
        </PlatterStack>
        <SelectStack>
          <SelectFormBox>
            <DropdownContainer>
              <DropdownLabel>Variety #1</DropdownLabel>
              <Dropdown
                label='Variety #1'
                value={variety1}
                onChange={handleSelect1}
              >
                {props.sandwiches.map((sandwich, idx) => {
                  return (
                    <Option key={idx} value={sandwich.name}>
                      {sandwich.name}
                    </Option>
                  )
                })}
              </Dropdown>
            </DropdownContainer>
            <DropdownContainer>
              <DropdownLabel>Variety #2</DropdownLabel>
              <Dropdown
                label='Variety #2'
                value={variety2}
                onChange={handleSelect2}
              >
                {props.sandwiches.map((sandwich, idx) => {
                  return (
                    <Option key={idx} value={sandwich.name}>
                      {sandwich.name}
                    </Option>
                  )
                })}
              </Dropdown>
            </DropdownContainer>
            <DropdownContainer>
              <DropdownLabel>Variety #3</DropdownLabel>
              <Dropdown
                label='Variety #3'
                value={variety3}
                onChange={handleSelect3}
              >
                {props.sandwiches.map((sandwich, idx) => {
                  return (
                    <Option key={idx} value={sandwich.name}>
                      {sandwich.name}
                    </Option>
                  )
                })}
              </Dropdown>
            </DropdownContainer>
            <DropdownContainer>
              <DropdownLabel>Variety #4</DropdownLabel>
              <Dropdown
                label='Variety #4'
                value={variety4}
                onChange={handleSelect4}
              >
                {props.sandwiches.map((sandwich, idx) => {
                  return (
                    <Option key={idx} value={sandwich.name}>
                      {sandwich.name}
                    </Option>
                  )
                })}
              </Dropdown>
            </DropdownContainer>
            <DropdownContainer>
              <DropdownLabel>Variety #5</DropdownLabel>
              <Dropdown
                label='Variety #5'
                value={variety5}
                onChange={handleSelect5}
              >
                {props.sandwiches.map((sandwich, idx) => {
                  return (
                    <Option key={idx} value={sandwich.name}>
                      {sandwich.name}
                    </Option>
                  )
                })}
              </Dropdown>
            </DropdownContainer>
          </SelectFormBox>
        </SelectStack>
        <AddToOrderButton>+</AddToOrderButton>
      </FormBox>
    </PlatterBox>
  )
}

export default PlatterSelect
