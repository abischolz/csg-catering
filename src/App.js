import React, { useState, useEffect } from 'react'
import './App.css'
import MealMenu from './components/Meal'
import Order from './components/CateringOrder'
import { MenuBox, AppContainer } from './app-styled'
import { menu } from './constants'

function App(props) {
  //
  const [order, setOrder] = useState([])

  /*
  methods -
  1. add item to cart (this needs to be global)
    these methods need to be in App and passed down as appropriate 
  2. build item (platters/heroes) -> this can be local 
    they should send the built item to the order 

  */

  /*
  order: [
    {
      name: itemName, 
      size: size || n/a, 
      variety: [],
      qty: qty, 
      price: here - put price of single item 


    }

  ]

  */
  return (
    <AppContainer className='App'>
      <h1>Catering Menu</h1>
      <MenuBox>
        <MealMenu
          id='Breakfast'
          sections={menu.breakfastSections}
          sandwiches={menu.breakfastSandwiches}
          addToOrder={setOrder}
          order={order}
          {...props}
        />

        <MealMenu
          id='Lunch'
          sections={menu.lunchSections}
          sandwiches={menu.lunchSandwiches}
          addToOrder={setOrder}
          order={order}
          {...props}
        />
        <Order
          id='Catering Request'
          addToOrder={setOrder}
          order={order}
          {...props}
        />
      </MenuBox>
    </AppContainer>
  )
}

export default App
