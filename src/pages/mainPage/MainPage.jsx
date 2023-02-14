import React from 'react';
import 'antd/dist/reset.css'
import RoomsTablePage from '../roomsTablePage'
import PropTypes from 'prop-types'

const propTypes = {
  isAccessAllowed: PropTypes.bool.isRequired,
  accounts: PropTypes.object.isRequired
};

const MainPage = ({
  isAccessAllowed,
  accounts
}) => {
  return <>
      {isAccessAllowed && 
      (accounts.length !== 0) &&     
      <RoomsTablePage />      
      }
    </> 
}

MainPage.propTypes = propTypes

export default MainPage
