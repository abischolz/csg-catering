import React, { useEffect } from 'react'
import SandwichCard from '../SandwichCard'
import Modal from '../Modal'
import HeroModal from '../Modal/HeroModal'
import { SectionBox, ItemBox } from './styles'

const SectionMenu = (props) => {
  const { section, order, setOrder } = props

  return (
    <SectionBox id={section.name} sx={{ boxShadow: 0 }}>
      <h3>{section.name}</h3>
      <ItemBox>
        {section.items.map((item, idx) => {
          return (
            <SandwichCard
              section={section.name}
              key={idx}
              item={item}
              modal={<Modal />}
              order={order}
              setOrder={setOrder}
              {...props}
            />
          )
        })}
      </ItemBox>
    </SectionBox>
  )
}

export default SectionMenu
