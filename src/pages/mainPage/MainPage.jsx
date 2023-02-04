import React from 'react';
import 'antd/dist/reset.css'
import { Button, DatePicker, message } from 'antd'

const MainPage = ({
  deleteUser,
  isAccessAllowed
}) => {

  const handleClick = () => {
    console.log('ok')
    deleteUser()
  }

  console.log('isAccessAllowed', isAccessAllowed)

  return (<>
      {isAccessAllowed ?      
      <p><Button type={'primary'} onClick={handleClick}>DELETE USER</Button></p>
      :      
      <p>Invalid username or password<br/>
      <Button type={'primary'} onClick={handleClick}>GO BACK</Button></p> 
      }
    </>
  )  
}

export default MainPage
