import React, { useState, useEffect } from 'react'
import './App.css'
import MealMenu from './components/Meal'
import Order from './components/CateringOrder'
import { MenuBox, AppContainer } from './app-styled'
import { menu } from './constants'

function App(props) {
  //
  const startingOrder = JSON.parse(localStorage.getItem('order')) ? JSON.parse(localStorage.getItem('order')) : [];

  const [order, setOrder] = useState(startingOrder);

  useEffect(() => {
		localStorage.setItem('order', JSON.stringify(order));
	}, [order]);


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
