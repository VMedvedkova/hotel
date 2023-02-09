import React from 'react';
import 'antd/dist/reset.css'
import { Button, DatePicker, message, Table } from 'antd'
import RoomsTablePage from '../roomsTablePage'

const MainPage = ({
  deleteUser,
  isAccessAllowed,
  accounts
}) => {

  const handleClick = () => {
    console.log('ok')
    deleteUser()
  }

  console.log('isAccessAllowed', isAccessAllowed)
  console.log('accounts', accounts)

  return (<>
      {isAccessAllowed && (accounts.length !== 0) &&     
      <RoomsTablePage />      
      }
    </>
  )  
}

export default MainPage
